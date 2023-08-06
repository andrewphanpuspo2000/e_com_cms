import { Button, Container, Form, Table } from "react-bootstrap";
import { AdminLayout } from "../../components/adminLayout/AdminLayout";
import PaymentWindow from "../../components/payment/PaymentWindow";
import { CustomModal } from "../../components/modal/CustomModal";
import { setEditSystem, setSystem } from "../../components/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMethods } from "../../components/payment/paymentAction";
import PaymentEditModal from "../../components/modal/PaymentEditModal";
import PaymentEdit from "../../components/payment/PaymentEdit";

export const Payment = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState({});
  const { methods } = useSelector((state) => state.paymentMethod);
  const handleOnAdd = () => {
    dispatch(setSystem(true));
  };
  const handleOnEdit = (item) => {
    setSelectedOption(item);
    dispatch(setEditSystem(true));
  };
  useEffect(() => {
    dispatch(getMethods());
  }, [dispatch]);
  return (
    <AdminLayout title="Payment">
      <Container>
        <Button className="w-100" onClick={handleOnAdd}>
          Add Payment Method
        </Button>
        <CustomModal modalTitle="Payment Option">
          <PaymentWindow />
        </CustomModal>
        <div className="d-flex justify-content-between mt-4">
          <div>{methods?.length} payment methods</div>
          <div>
            <Form.Control placeholder="Search" />
          </div>
        </div>
        <PaymentEditModal modalTitle="Edit Payment Method">
          <PaymentEdit option={selectedOption} />
        </PaymentEditModal>
        <Table striped bordered hover size="md" className="mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Status</th>
              <th>Option</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={item.status === "active"}
                  />
                </td>
                <td>{item.option}</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    variant="warning"
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
