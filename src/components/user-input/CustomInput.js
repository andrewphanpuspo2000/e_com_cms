import { Form } from "react-bootstrap";

export const CustomInput = ({
  handleOnChange,
  fieldName,
  emailRef,
  ...rest
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{fieldName}</Form.Label>
      <Form.Control {...rest} onChange={handleOnChange} ref={emailRef} />
    </Form.Group>
  );
};
