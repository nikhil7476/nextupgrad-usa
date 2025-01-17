import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import styles from "@/styles/Enterprise.module.css";

function TestForms() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Form className={styles.proposalForm} onSubmit={handleSubmit}>
        <Form.Group className={styles.propEmail} controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter your website" required />
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.ctaBtn}>
          Send Us A Proposal
        </Button>
      </Form>
    </>
  );
}

export default TestForms;
