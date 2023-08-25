import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const CategoryOption = ({ handleChange }) => {
  const { category } = useSelector((state) => state.categoryData);
  return (
    <Form.Select name="parentCat" onChange={handleChange} required={true}>
      <option value="none">--None of These--</option>
      {category?.map((item, i) => (
        <option value={item._id}>{item.title}</option>
      ))}
    </Form.Select>
  );
};

export default CategoryOption;
