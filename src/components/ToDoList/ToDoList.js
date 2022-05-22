import React, { useState, useEffect } from "react";
import { Button, FormControl, Row, Col, ButtonGroup } from "react-bootstrap";
import s from "./ToDoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faDeleteLeft,
  faPencil,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

function ToDoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(todo);

  useEffect(() => setFiltered(todo), [todo]);

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => {
      return item.id !== id;
    });
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setValue(title);
    setEdit(id);
  }
  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  function filetedTodo(status) {
    if (status === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => {
        return item.status === status;
      });
      return setFiltered(newTodo);
    }
  }

  return (
    <div>
      <Row>
        <Col className={s.filter}>
          <ButtonGroup className={s.btns} aria-label="Basic example">
            <Button variant="secondary" onClick={() => filetedTodo("all")}>
              All
            </Button>
            <Button variant="secondary" onClick={() => filetedTodo(true)}>
              Open
            </Button>
            <Button variant="secondary" onClick={() => filetedTodo(false)}>
              Close
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {filtered.map((item) => {
        return (
          <div key={item.id} className={s.itemList}>
            {edit === item.id ? (
              <div>
                <FormControl
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            ) : (
              <div className={!item.status ? s.close : ""}>{item.title} </div>
            )}

            {edit === item.id ? (
              <Button
                variant="outline-secondary"
                onClick={() => saveTodo(item.id)}
              >
                <FontAwesomeIcon icon={faFloppyDisk} />
              </Button>
            ) : (
              <div>
                <Button
                  variant="outline-secondary"
                  onClick={() => deleteTodo(item.id)}
                >
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </Button>
                <Button
                  className={s.btn}
                  variant="outline-secondary"
                  onClick={() => editTodo(item.id, item.title)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </Button>
                <Button
                  className={s.btn}
                  variant="outline-secondary"
                  onClick={() => statusTodo(item.id)}
                >
                  {item.status ? (
                    <FontAwesomeIcon icon={faLockOpen} />
                  ) : (
                    <FontAwesomeIcon icon={faLock} />
                  )}
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
