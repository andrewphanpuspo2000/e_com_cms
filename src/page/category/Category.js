import { Button, Form, Table } from "react-bootstrap";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import { CustomInput } from "../../components/user-input/CustomInput";
import { useEffect, useState } from "react";
import {
  getAllCategoriesAction,
  sendCategoryAction,
} from "../../components/category/categoryAction";
import { useDispatch, useSelector } from "react-redux";

export const Category = () => {
  const inputs = [
    {
      fieldName: "Title",
      name: "title",
      placeholder: "Input title",
      required: true,
    },
  ];
  const [form, setForm] = useState({});
  const { category } = useSelector((state) => state.categoryData);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(sendCategoryAction(form));
  };
  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return (
    <AdminLayout title="Category">
      <Form className="p-5 mx-4 shadow-lg" onSubmit={handleOnSubmit}>
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} handleOnChange={handleOnChange} />
        ))}
        <Button type="submit" className="">
          Submit
        </Button>
      </Form>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.slug}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
};
