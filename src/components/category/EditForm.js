import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateCat } from "./categoryAction";

const EditForm = ({ cats }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const res = dispatch(updateCat(form));
  };
  useEffect(() => {
    setForm(cats);
  }, [dispatch, cats]);
  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]: value,
      status: checked ? "active" : "inactive",
    });
  };

  return (
    <div>
      <Form className="p-3  shadow-lg" onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Check
              type="switch"
              title="status"
              onChange={handleOnChange}
              checked={form.status === "active"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              name="title"
              value={form.title}
              onChange={handleOnChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit" className="w-100">
              Update Category
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="w-100" variant="danger">
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditForm;
