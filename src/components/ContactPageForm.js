import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Spinner } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import axiosInstance from "../../axios/axios";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "@/styles/ContactUs.module.css";
import "react-international-phone/style.css";

function ContactPageForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    form_name: "contact_form",
  });

  const [errors, setErrors] = useState({});
  // const [recaptcha, setRecaptcha] = useState(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        recaptcha: "Please complete the ReCAPTCHA.",
      }));
      return;
    }

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axiosInstance.post("/postFormData", {
          ...formData,
          recaptchaValue,
        });
        console.log(response.data);
        if (response.status === 200 || response.status === 201) {
          toast.success("Email sent");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            form_name: "contact_form",
          });
          router.push("/thank-you");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <>
      <div className={styles.contPageForm}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <PhoneInput
              className={styles.phoneINR}
              required
              defaultCountry="US"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  phone: value,
                }))
              }
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formSubject">
            <Form.Control
              type="text"
              placeholder="Enter Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className={`captcha ${styles.contactPageRecaptcha}`}>
            <Form.Group controlId="formRecaptcha">
              <ReCAPTCHA
                sitekey="6LcsJt0pAAAAADojY-EwlCuhurrgweKE5lZS89lU"
                onChange={handleRecaptchaChange}
              />
              {errors.recaptcha && (
                <div className="text-danger">{errors.recaptcha}</div>
              )}
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className={`w-100 mt-1 ${styles.contactFormBtn}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default ContactPageForm;
