import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/user-input/CustomInput";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProductAction } from "../../components/product/productAction";
import { updateProfileAction } from "../../components/admin-signup/adminAction";

const EditProfile = () => {
  const [form, setForm] = useState({});
  const [img, setImg] = useState([]);
  const { user } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    setForm(user);
    console.log(img);
  }, [img]);
  const inputFields = [
    {
      fieldName: "First Name",
      type: "text",
      placeholder: "Input first name",
      required: true,
      name: "fName",
      value: form?.fName,
    },
    {
      fieldName: "Last Name",
      type: "text",
      placeholder: "Input last name",
      required: true,
      name: "lName",
      value: form?.lName,
    },

    {
      fieldName: "Address",
      type: "text",
      placeholder: "Input address ",
      required: true,
      name: "address",
      value: form?.address,
    },
    {
      fieldName: " Password",
      type: "password",
      placeholder: "Input password ",
      required: true,
      name: "validationPassword",
      minLength: "6",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "status") {
      setForm({ ...form, status: checked ? "active" : "inActive" });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
    console.log(form);
  };
  const handleOnImage = (e) => {
    const { files } = e.target;
    console.log(files);
    setImg(files);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    if (img.length) {
      formData.append("image", img[0]);
    }
    console.log(formData);
    const result = dispatch(updateProfileAction(formData));
    setImg({});
  };
  return (
    <AdminLayout title="Edit Profile">
      <Form onSubmit={handleOnSubmit}>
        <div style={{ width: "150px", height: "150px" }}>
          <img
            className="w-100 h-100"
            src={process.env.REACT_APP_ROOTAPI + form?.image?.slice(10)}
            alt="Profile Photo"
          />
        </div>

        <Form.Label>Profile Image</Form.Label>
        <Form.Group>
          <Form.Control type="file" name="image" onChange={handleOnImage} />
        </Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Check
          name="status"
          type="switch"
          checked={form.status === "active"}
          onChange={handleOnChange}
        />
        {inputFields.map((item, i) => (
          <CustomInput
            key={i}
            fieldName={item.fieldName}
            handleOnChange={handleOnChange}
            {...item}
          />
        ))}
        <Button type="submit" className="mb-3" variant="dark">
          Submit
        </Button>
      </Form>
    </AdminLayout>
  );
};

export default EditProfile;
