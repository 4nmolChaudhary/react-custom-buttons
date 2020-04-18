import styled from "styled-components";

export const SecondaryButton = styled.button`
  padding: 18px 32px;
  display: flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  border: 2px solid #ace4fc;
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
    transition: transform 100ms ease-in;
    transform: translateY(-2px);
  }
  &:active {
    background: #00ccff;
  }
`;
