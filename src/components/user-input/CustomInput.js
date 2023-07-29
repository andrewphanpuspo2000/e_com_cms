import { Form } from "react-bootstrap";

export const CustomInput = ({ handleOnChange, fieldName, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control {...rest} onChange={handleOnChange} />
    </Form.Group>
  );
};
