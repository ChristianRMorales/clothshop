import { useContext } from "react";
import { ShopContext } from "../../context";
import { Product } from "../../models/Product";
import { Title } from "../Cart";
import {
  Cell,
  CheckOutHeader,
  CheckOutInput,
  CheckOutLabel,
  CheckOutTable,
  ItemWrapper,
  OrderButton
} from "./CheckOut.styled";

export const CheckOut = () => {
  const { products, total } = useContext(ShopContext);

  return (
    <>
      <CheckOutTable>
        <thead>
          <tr>
            <CheckOutHeader>Item</CheckOutHeader>
            <CheckOutHeader>Name</CheckOutHeader>
            <CheckOutHeader>Price</CheckOutHeader>
            <CheckOutHeader>Quantity</CheckOutHeader>
            <CheckOutHeader>Total</CheckOutHeader>
          </tr>
        </thead>
        {products.map((product: Product, index) => (
          <tbody key={index}>
            <tr>
              <Cell>
                <ItemWrapper background={product.imageUrl}></ItemWrapper>
              </Cell>
              <Cell>
                <p>{product.name}</p>
              </Cell>
              <Cell>
                <p>${product.price}.00</p>
              </Cell>
              <Cell>
                <p>{product.quantity}</p>
              </Cell>
              <Cell>
                <p>${product.price * product.quantity}</p>
              </Cell>
            </tr>
          </tbody>
        ))}
      </CheckOutTable>
      <Title>
        <OrderButton>
          <p>Place Order</p>
        </OrderButton>
      </Title>
      <p> Grand Total: ${total}.00 </p>
    </>
  );
};
