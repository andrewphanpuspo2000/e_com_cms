import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import { CustomInput } from "../../components/user-input/CustomInput";
import { useEffect, useRef, useState } from "react";
import {
  getAllCategoriesAction,
  sendCategoryAction,
} from "../../components/category/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "../../components/category/EditForm";
import { CustomModal } from "../../components/modal/CustomModal";
import { setSystem } from "../../components/modal/modalSlice";

export const Category = () => {
  const inputs = [
    {
      name: "title",
      placeholder: "Input Category",
      required: true,
    },
  ];
  // const nameRef = useRef();
  const [form, setForm] = useState({});
  const { category } = useSelector((state) => state.categoryData);
  const dispatch = useDispatch();
  const [selectedTable, setSelectedTable] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(sendCategoryAction(form));
  };
  const handleOnEdit = (obj) => {
    dispatch(setSystem(true));
    setSelectedTable(obj);
  };
  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return (
    <AdminLayout title="Category">
      <Container>
        <Form className="p-3  shadow-lg " onSubmit={handleOnSubmit}>
          <Row>
            <Col>
              {inputs.map((item, i) => (
                <CustomInput
                  key={i}
                  {...item}
                  handleOnChange={handleOnChange}
                />
              ))}
            </Col>
            <Col>
              <Button type="submit" className="w-100 mt-4">
                Add new category
              </Button>
            </Col>
          </Row>
        </Form>

        <CustomModal modalTitle="Update Category">
          <EditForm cats={selectedTable} />
        </CustomModal>

        <div className="d-flex justify-content-between mt-4 ">
          <div> {category.length} categories</div>
          <div>
            <Form.Control placeholder="Search category" />
          </div>
        </div>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Status</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {category?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <span
                    className={
                      item.status === "active"
                        ? "bg-success p-2 text-light"
                        : "bg-danger p-2 text-light"
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.title}</td>
                <td>{item.slug}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleOnEdit(item);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </AdminLayout>
  );
};
