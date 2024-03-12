import React from "react";
import EditProduct from "./EditProduct";
import useProductsApi from "../customHooks/useProductsApi";
import { Link } from "react-router-dom";

const ProductList = ({ product, index, skip }) => {
  const { handlerDelete } = useProductsApi();
  return (
    <tr>
      <th scope="row">{index + 1 + skip}</th>
      <td>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          {product.title}
        </Link>
      </td>
      <td>{product.category}</td>
      <td>
        <b>$</b>
        {product.price}
      </td>
      <td>{product.stock}</td>
      <td>
        <EditProduct productsData={product} />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handlerDelete(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductList;
