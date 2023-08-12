import React from "react";
import { Button } from "react-bootstrap";
import ProductTable from "./ProductTable";
import { Link } from "react-router-dom";

const ProductCom = () => {
  return (
    <>
      <div className="text-end">
        <Link to="/new-product">
          <Button variant="primary">Add Product</Button>
        </Link>
      </div>
      <ProductTable />
    </>
  );
};

export default ProductCom;
