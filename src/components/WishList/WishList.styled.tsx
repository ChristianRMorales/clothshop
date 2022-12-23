import styled from "styled-components";

export const Title = styled.p`
  font-weight: bold;
  font-size: 10px;
  margin-top: 10px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;
