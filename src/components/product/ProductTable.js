import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction, getAllProductsAction } from "./productAction";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const { products } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Thumbnail</th>
          <th>Product Name</th>
          <th>QTY</th>
          <th>Price</th>
          <th>Sales Price</th>
          <th>Sales Start</th>
          <th>Sales End</th>
        </tr>
      </thead>
      <tbody>
        {products?.length &&
          products.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img
                  src={
                    process.env.REACT_APP_ROOTAPI + item?.thumbnail?.slice(10)
                  }
                  style={{ width: "250px" }}
                />
              </td>
              <td>{item.name}</td>

              <td>{item.qty}</td>
              <td>$ {item.price}</td>
              <td>$ {item.salesPrice}</td>
              <td>{item?.salesStart?.slice(0, 10)}</td>
              <td>{item?.salesEnd?.slice(0, 10)}</td>
              <td>
                <Link to={`/editProduct/${item._id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteProductAction(item._id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
