import { Accordion } from "react-bootstrap";

function SeoServiceAccordion() {
    return (
        <>
            <Accordion defaultActiveKey="0" flush className="seoAccordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How long does it take to see results from SEO?</Accordion.Header>
                    <Accordion.Body>
                        SEO is a long-term investment. While you may start to see improvements within 3-6 months, lasting results often take 6-12 months, depending on your industry and competition.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Do you offer customized SEO plans?</Accordion.Header>
                    <Accordion.Body>
                        Yes! Every business is unique, and we craft strategies tailored to your specific goals and challenges.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How do you measure success in an SEO campaign?</Accordion.Header>
                    <Accordion.Body>
                        We track key performance indicators such as organic traffic, keyword rankings, conversion rates, and ROI to measure success.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Can you help with local SEO?</Accordion.Header>
                    <Accordion.Body>
                        Absolutely. We specialize in optimizing your online presence to attract customers from your local area.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Do I need to sign a long-term contract?</Accordion.Header>
                    <Accordion.Body>
                        No, we offer flexible, month-to-month plans so you can adjust your services as your business grows.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default SeoServiceAccordion;
