import { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const {user} = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, photoURLRef.current.value);
  }

  const handleNameChange = event => {
    setName(event.target.name.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={user?.email} type="email" readOnly disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handleNameChange} name="name" defaultValue={name} type="text" placeholder="Your Full Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo Link</Form.Label>
        <Form.Control ref={photoURLRef} name="photoURL" defaultValue={user?.photoURL} type="text" placeholder="Your Photo Link" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Profile;
