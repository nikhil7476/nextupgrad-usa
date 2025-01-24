import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Spinner } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import axios from "axios";
import Select from "react-select"; // Import react-select
import { toast } from "sonner";
import styles from "@/styles/LandingPage.module.css";
import "react-international-phone/style.css";

function LandingPageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    form_name: "landing_page_form",
    service_name: [], // Service name field initialized as an array
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Options for services
  const availableServices = [
    { value: "Web Development", label: "Web Development" },
    { value: "App Development", label: "App Development" },
    { value: "SEO", label: "SEO" },
    { value: "Marketing", label: "Marketing" },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleServiceChange = (selectedOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      service_name: selectedOptions
        ? selectedOptions.map((opt) => opt.value)
        : [],
    }));
  };

  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;
    const errors = {};

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!phone.trim()) errors.phone = "Phone is required";
    if (!subject.trim()) errors.subject = "Subject is required";
    if (!message.trim()) errors.message = "Message is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        //     setFormData((prevData) => ({
        //         ...prevData,
        //         service_name: prevData.service_name?.toString()
        //       }))

        // console.log('prevData', formData);

        const response = await axios.post(
          "https://53c50cd527.nxcli.io/nextupgrad_backend/api/postFormData",
          formData
        );
        if (response.status === 200 || response.status === 201) {
          toast.success("Form Submitted.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            form_name: "landing_page_form",
            service_name: [],
          });
          setTimeout(() => router.push("/thank-you"), 750);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Submission failed. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.landingForm}>
      <Form className="hiringForm" onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group className="col-md-6" controlId="name">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData?.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="col-md-6" controlId="email">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={formData?.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="row mt-4">
          <Form.Group className="col-md-6" controlId="phone">
            <PhoneInput
              defaultCountry="US"
              placeholder="Enter your phone number"
              value={formData?.phone}
              onChange={(value) =>
                setFormData((prevData) => ({ ...prevData, phone: value }))
              }
            />
            {errors.phone && (
              <div className="invalid-feedback d-block">{errors?.phone}</div>
            )}
          </Form.Group>

          <Form.Group className="col-md-6" controlId="subject">
            <Form.Control
              type="text"
              placeholder="Enter subject"
              value={formData?.subject}
              onChange={handleChange}
              isInvalid={!!errors.subject}
            />
            <Form.Control.Feedback type="invalid">
              {errors.subject}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <Form.Group className="mt-4">
          <Select
            isMulti
            options={availableServices}
            value={availableServices.filter((service) =>
              formData.service_name.includes(service.value)
            )}
            onChange={handleServiceChange}
            className={`basic-multi-select ${styles.multiSel}`}
            classNamePrefix="select"
          />
        </Form.Group>

        <Form.Group className="mt-4" controlId="message">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className={`w-100 mt-3 ${styles.cta}`}
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
  );
}

export default LandingPageForm;
