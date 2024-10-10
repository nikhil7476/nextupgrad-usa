import { Form, Button, Spinner } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    form_name: "digital_solution",
  });
  const [errors, setErrors] = useState({});
  const [recaptcha, setRecaptcha] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowRecaptcha(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axiosInstance.post("/postFormData", formData);
        console.log(response.data);
        if (response.status == 200 || response.status == 201) {
          toast.success("Email sent");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            form_name: "digital_solution",
          });
          router.push("/thank-you");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occured. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="formBasicName">Full Name</Form.Label>
          <Form.Control
            id="formBasicName"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="formBasicEmail">Email Address</Form.Label>
          <Form.Control
            id="formBasicEmail"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="phoneInput">Phone Number</Form.Label>
          <PhoneInput
            inputProps={{
              id: "phoneInput",
            }}
            initialCountry="US"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(value) =>
              setFormData((prevData) => ({
                ...prevData,
                phone: value,
              }))
            }
            isInvalid={!!errors.phone}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="formBasicSubject">Subject</Form.Label>
          <Form.Control
            id="formBasicSubject"
            type="text"
            placeholder="Enter the subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            isInvalid={!!errors.subject}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="formBasicMessage">Your Message</Form.Label>
          <Form.Control
            id="formBasicMessage"
            as="textarea"
            rows={4}
            placeholder="Type your message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>
        {showRecaptcha && (
          <div className="captcha">
            <ReCAPTCHA
              sitekey="6LcsJt0pAAAAADojY-EwlCuhurrgweKE5lZS89lU"
              onChange={(val) => {
                console.log("recaptcha value", val);
                setRecaptcha(val);
              }}
            />
          </div>
        )}
        <Button
          variant="primary"
          type="submit"
          className="subBtn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-2">Submitting...</span>
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
