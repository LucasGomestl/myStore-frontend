import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
`;

export const QuantityNav = styled.div``;

export const Quantity = styled.input`
  width: 68px;
  height: 42px;
  line-height: 1.65;
  padding: 0;
  margin: 0;
  padding-left: 18px;
  border: 1px solid #eee;
  box-sizing: border-box;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: 0;
  }
`;

export const Button = styled.div`
  position: relative;
  cursor: pointer;
  border-left: 1px solid #eee;
  width: 20px;
  text-align: center;
  color: #333;
  font-size: 13px;
  font-family: "Trebuchet MS", Helvetica, sans-serif !important;
  line-height: 1.7;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;
