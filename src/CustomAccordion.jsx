import React from "react";
import { Accordion } from "react-bootstrap";

const CustomAccordion = ({ key, header, body }) => {
  return (
    <Accordion defaultActiveKey={key} flush>
      <Accordion.Item eventKey={key}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CustomAccordion;
