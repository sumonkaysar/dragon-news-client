import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;


    console.log(name, email, photoURL, password);
    createUser({email, password})
    .then(result => {
      console.log(result.user);
      form.reset();
    })
    .catch(err => console.error(err))
  }

  return (
    <div className="mx-lg-4">
      <h2 className="text-center mb-3">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="mb-1">Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Full Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mb-1">Photo Link</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Your photo link" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mb-1">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group>
          <Form.Label className="mb-1">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-danger">
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
