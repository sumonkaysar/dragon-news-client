import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState('');
  const {login, setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login({email, password})
    .then(result => {
      console.log(result.user);
      form.reset();
      setError('');
      if(result.user.emailVerified){
        navigate(from, {replace: true});
      }else{
        toast.error('your email is not verified')
      }
    })
    .catch(err => {
      console.error(err);
      setError(err.message);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="mx-lg-4">
      <h2 className="text-center mb-3">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="mb-1">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-1">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Text className="text-danger">
          {error}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
