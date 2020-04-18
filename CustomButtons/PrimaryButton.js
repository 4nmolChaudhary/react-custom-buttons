import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 18px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  border: 2px solid ${(props) => (props.background ? props.background : "#1893F2")};
  font-size: 16px;
  font-family: "GoogleSans-Bold";
  cursor: pointer;
  background: ${(props) => (props.background ? props.background : "#1893F2")};
  box-shadow: ${(props) => props.shadow ? "4px 4px 8px rgba(0,0,0,0.2)" : "none"};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius + 'px' : 0};

  svg,
  img {
    margin-right: 0 10px;
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
  &:disabled {
    background: #757575;
    color: #000;
    cursor: not-allowed;
  }
  &:hover {
    background: #2c9df4;
  }
  &:active {
    background: #1893f2;
  }
`;
