import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteCat, updateCat } from "./categoryAction";
import { setSystem } from "../modal/modalSlice";

const EditForm = ({ cats }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const res = dispatch(updateCat(form));
    dispatch(setSystem(false));
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
  const handleOnDelete = () => {
    dispatch(deleteCat(cats?._id));
    dispatch(setSystem(false));
  };
  return (
    <div>
      <Form className="p-3  shadow-lg" onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            <Form.Label>Status</Form.Label>
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
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={form.title}
              onChange={handleOnChange}
            />
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <Button type="submit" className="w-100">
              Update Category
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <Button className="w-100" variant="danger" onClick={handleOnDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditForm;
