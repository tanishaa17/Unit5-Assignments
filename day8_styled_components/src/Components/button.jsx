import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  margin: auto;
`;

const Div = styled.div``;

const Button = styled.button`
  border: none;
  padding: 10px;
  margin-left: 5px;

  color: ${({ primary }) => (primary === "primary" ? "#ffff" : "")};
  background-color: ${({ primary }) =>
    primary === "primary" ? "#1C6DD0" : ""};

  font-weight: bold;
  border-radius: 5px;

  border: ${({ def }) => (def === "def" ? "1px solid gray" : "")};
  background-color: ${({ def }) => (def === "def" ? "#ffff" : "")};

  border: ${({ dashed }) => (dashed === "dashed" ? "1px dashed gray" : "")};
  background-color: ${({ dashed }) => (dashed === "dashed" ? "#ffff" : "")};

  border: ${({ text }) => (text === "text" ? "none" : "")};
  background-color: ${({ text }) => (text === "text" ? "#ffff" : "")};

  border: ${({ link }) => (link === "link" ? "none" : "")};
  background-color: ${({ link }) => (link === "link" ? "#ffff" : "")};
  color: ${({ link }) => (link === "link" ? "#1C6DD0" : "")};
`;

export { Button, Flex, Div };
