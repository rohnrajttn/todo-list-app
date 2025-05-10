import React, { ReactNode, useRef, useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { add_todo, remove_todo } from "../slice/todoSlice.ts";

interface todo {
  id: number;
  title: string;
  description: string;
}

const TodoList = (): ReactNode => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const todos: todo[] = useSelector((state: todo[]) => state);

  let name ='rohan'
  name = 'rohan raj'
  name = 'rohan raj jha'

  console.log(name);
  console.log(todos);
  console.log('here')
  const ref = useRef(4);

  const handleAddTodo = () => {
    let id = ref.current++;
    dispatch(add_todo({ id, title, description }));

    setTitle("");
    setDescription("");
  };

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <h1 className={styles.todoListTitle}>Todo List</h1>

        <div className={styles.addTodoForm}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
            className={styles.input}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter todo description"
            className={styles.input}
          />
          <button onClick={handleAddTodo} className={styles.addButton}>
            Add Todo
          </button>
        </div>

        {todos?.map((todo) => (
          <div key={todo.id} className={styles.todoItem}>
            <div>
              <h3 className={styles.todoTitle}>{todo.title}</h3>
              <p className={styles.todoDescription}>{todo.description}</p>
            </div>
            <div>
              <button
                className={styles.removeButton}
                onClick={() => {
                  console.log(todo.id);
                  dispatch(remove_todo(todo.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
