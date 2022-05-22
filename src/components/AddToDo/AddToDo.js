import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, FormControl, Row, Col } from "react-bootstrap";
import s from "./AddToDo.module.css";

function AddToDo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function addTodo() {
    if (value !== "") {
      setTodo([...todo, { id: uuidv4(), title: value, status: true }]);
    }

    setValue("");
  }
  return (
    <Row>
      <Col className={s.addToDoForm}>
        <FormControl
          placeholder="Enter a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className={s.btn}
          variant="outline-secondary"
          onClick={() => addTodo()}
        >
          Save
        </Button>
      </Col>
    </Row>
  );
}

export default AddToDo;
