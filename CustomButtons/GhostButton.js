import styled from "styled-components";

export const GhostButton = styled.button`
  padding: 18px 32px;
  display: flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  font-family: "GoogleSans-Bold";
  cursor: pointer;
  background: none;
  box-shadow: ${(props) =>
    props.shadow ? "4px 4px 8px rgba(0,0,0,0.2)" : "none"};

  &:disabled {
    background: #757575;
    color: #000;
    cursor: not-allowed;
  }
  &:hover {
    background: #2c9df4;
    border: 2px solid #2c9df4;
  }
  &:active {
    background: #1893f2;
    border: 2px solid #1893f2;
  }
`;
