import styled from "styled-components";

export const IncrementButton = styled.button`
  background-color: #53ff1a;
  border-radius: 50px;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;

  p {
    font-size: 10px;
    font-weight: bold;
    margin: 0;
    color: whitesmoke;
  }
`;

export const DecrementButton = styled.button`
  background-color: #ff8000;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;

  p {
    font-size: 10px;
    font-weight: normal;
    margin: 0;
    color: whitesmoke;
  }
`;

export const QuantityView = styled.span`
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  padding: 25px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 1s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
