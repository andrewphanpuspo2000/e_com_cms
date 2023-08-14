import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/user-input/CustomInput";
import { useDispatch } from "react-redux";
import {
  getAllProductsAction,
  getProduct,
  updateProductAction,
} from "../../components/product/productAction";
import CategoryOption from "../../components/category/CategoryOption";
import { getAllCategoriesAction } from "../../components/category/categoryAction";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [form, setForm] = useState();
  const [imgs, setImgs] = useState([]);
  const [selectedDelete, setSelectedDelete] = useState([]);
  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Samsung",
      required: true,
      value: form?.name,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: form?.sku,
      disabled: true,
    },
    {
      name: "qty",
      label: "QTY",
      type: "text",
      placeholder: "50",
      required: true,
      value: form?.qty,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "1000",
      required: true,
      value: form?.price,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "800",
      value: form?.salesPrice,
    },
    {
      name: "salesStart",
      label: "Sales Start Date",
      type: "Date",
      value: form?.salesStart?.slice(0, 10),
    },
    {
      name: "salesEnd",
      label: "Sales End Date",
      type: "Date",
      value: form?.salesEnd?.slice(0, 10),
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

  const dispatch = useDispatch();
  const { id } = useParams();
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
      [...imgs].forEach((image) => formDt.append("images", image));
    }
    //append all the form data and the image together
    dispatch(updateProductAction(formDt));
  };

  const handleSelectedDelete = (e) => {
    const { value, checked } = e.target;
    if (value === form.thumbnail) return alert("You can not delete thumbnail");
    checked
      ? setSelectedDelete([...selectedDelete, value])
      : setSelectedDelete(selectedDelete.filter((url) => url !== value));
  };

  const handleOnImageAttached = (e) => {
    const { files } = e.target;
    console.log(files);
    setImgs(files);
  };
  const getProductWithId = async (id) => {
    const product = await getProduct(id);
    const { slug, createdAt, updatedAt, __v, ...rest } = product;
    product?._id && setForm(rest);
  };
  useEffect(() => {
    dispatch(getAllCategoriesAction());
    getProductWithId(id);
    // console.log(selectedDelete);
  }, [dispatch, id]);
  return (
    <AdminLayout title="Edit Product">
      <div className="mb-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              checked={form?.status === "active"}
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
          <div className="py-5 d-flex justify-content-between flex-wrap gap-4">
            {form?.images?.map((url) => (
              <div className="d-flex flex-column">
                <div>
                  <input
                    type="radio"
                    name="thumbnail"
                    checked={url === form.thumbnail}
                    value={url}
                    onChange={handleOnChange}
                  />
                  <br />
                  <label>Thumbnail</label>
                </div>
                <img
                  src={process.env.REACT_APP_ROOTAPI + url?.slice(10)}
                  style={{ width: "250px" }}
                />
                <div>
                  <Form.Check
                    label="Delete"
                    value={url}
                    onChange={handleSelectedDelete}
                    checked={selectedDelete.includes(url)}
                  />
                </div>
              </div>
            ))}
          </div>
          <Form.Group>
            <Form.Control
              type="file"
              name="img"
              multiple
              onChange={handleOnImageAttached}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100 mt-5">
            Edit Product
          </Button>
          <br />
          <Button variant="danger" className="w-100 mt-4">
            Delete Product
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
