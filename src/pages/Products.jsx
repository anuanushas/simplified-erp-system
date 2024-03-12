import React from "react";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";
import useProductsApi from "../customHooks/useProductsApi.jsx";
import Pagination from "../components/Pagination.jsx";
const Products = () => {
  const { products, product, setProduct, addProduct } = useProductsApi();
  const [skip, setSkip] = React.useState(0);
  const productListData = products.slice(skip, skip + 10);

  return (
    <div className="container mt-3">
      <AddProduct
        addProduct={addProduct}
        product={product}
        setProduct={setProduct}
      />

      <table className="table container mt-2">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock Quantity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productListData.map((product, index) => {
            return (
              <ProductList
                product={product}
                index={index}
                key={product.id}
                skip={skip}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination skip={skip} setSkip={setSkip} pageCount={products.length} />
    </div>
  );
};

export default Products;
