import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/user-input/CustomInput";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../components/product/productAction";
import CategoryOption from "../../components/category/CategoryOption";
import { getAllCategoriesAction } from "../../components/category/categoryAction";

const NewProduct = () => {
  const initialState = { status: "inActive" };
  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Samsung",
      required: true,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: "Samsung-TV3",
      required: true,
    },
    {
      name: "qty",
      label: "QTY",
      type: "text",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "1000",
      require: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "800",
    },
    {
      name: "salesStart",
      label: "Sales Start Date",
      type: "Date",
    },
    {
      name: "salesEnd",
      label: "Sales End Date",
      type: "Date",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "Product Description",
      rows: "10",
      require: true,
    },
  ];
  const [form, setForm] = useState(initialState);
  const [imgs, setImgs] = useState([]);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inActive";
    }
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //set all from data in FormData
    const formDt = new FormData();

    for (let key in form) {
      formDt.append(key, form[key]);
    }
    //check if there is any new image is being added
    if (imgs?.length) {
      [...imgs].forEach((image) => formDt.append("image", image));
    }
    //append all the form data and the image together
    dispatch(addProductAction(formDt));
  };

  const handleOnImageAttached = (e) => {
    const { files } = e.target;
    console.log(files);
    setImgs(files);
  };

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return (
    <AdminLayout title="New Product">
      <div className="mb-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              onChange={handleOnChange}
            />
          </Form.Group>
          <CategoryOption handleChange={handleOnChange} />
          {inputs.map((item, i) => (
            <CustomInput
              key={i}
              fieldName={item.label}
              {...item}
              handleOnChange={handleOnChange}
            />
          ))}
          <Form.Group>
            <Form.Control
              type="file"
              name="img"
              multiple
              onChange={handleOnImageAttached}
            />
          </Form.Group>
          <Button type="submit">Add Product</Button>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default NewProduct;
