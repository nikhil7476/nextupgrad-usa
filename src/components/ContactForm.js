import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <PhoneInput
          defaultCountry="US"
          placeholder="Enter your phone number"
          required
        />
      </Form.Group> */}
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="phoneInput">Phone Number</Form.Label>
        <PhoneInput
          id="phoneInput"
          defaultCountry="US"
          placeholder="Enter your phone number"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter the subject" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Your Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Type your message..."
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="subBtn">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
