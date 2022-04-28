import { useState } from "react";
import { Button, Flex, Div } from "./Components/button";
import "./styles.css";

export default function App() {
  const [primary, setPrimary] = useState("primary");
  const [def, setdef] = useState("def");
  const [dashed, setDashed] = useState("dashed");
  const [text, setText] = useState("text");
  const [link, setLink] = useState("link");

  return (
    <div className="App">
      <Flex>
        <Button primary={primary}>Primary Button</Button>

        <Button def={def}>Default Button</Button>

        <Button dashed={dashed}> Dashed Button </Button>
      </Flex>

      <Button text={text}> Text Button </Button>
      <Button link={link}> link Button </Button>
    </div>
  );
}
