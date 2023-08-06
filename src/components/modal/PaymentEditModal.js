import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setEditSystem } from "./modalSlice";
const PaymentEditModal = ({ children, modalTitle }) => {
  const dispatch = useDispatch();
  const { editModal } = useSelector((state) => state.modalSystem);

  return (
    <>
      <Modal show={editModal} onHide={() => dispatch(setEditSystem(false))}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentEditModal;
