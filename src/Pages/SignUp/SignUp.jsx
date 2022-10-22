import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const { createUser, updateUserInfo, verifyEmail } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser({ email, password })
    .then(result => {
      console.log(result.user);
      form.reset();
      setError('');
      handleUpdateUserProfile(name, photoURL);
      handleEmailVerify();
    })
    .catch(err => {
      console.error(err);
      setError(err.message);
    })
  }

  const handleUpdateUserProfile = (name, photoURL) => {
    updateUserInfo({displayName: name, photoURL})
    .then(() => {})
    .catch(err => console.error(err))
  }

  const handleEmailVerify = () => {
    verifyEmail()
    .then(() => {
      toast.success('Please Verify your email')
    })
    .catch(err => console.error(err))
  }

  const handleAccepted = event => setIsAccepted(event.target.checked);

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
        <Form.Group  className="mb-2">
          <Form.Label className="mb-1">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group controlId="termsAndConditions">
          <Form.Check onClick={handleAccepted} type="checkbox" label="Accept our terms and conditions" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-danger">
            {error}
          </Form.Text>
        </Form.Group>
        <Button 
        disabled={!isAccepted}
        variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
