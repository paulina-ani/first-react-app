import React from "react";
import "./TodoApp.module.css";
import {
  todoapp,
  newTodo,
  edit,
  main,
  toggleAll,
  label,
  todoList,
  view,
  toggle,
  completed,
  destroy,
  footer,
  todoCount,
  filters,
  info,
  selected
} from "./TodoApp.module.css";

function TodoAppFooter(props) {
  return (
    <footer className={info}>
      <p>Double-click to edit a todo</p>
      <p>
        Created by
        <a href="hhttps://github.com/paulina-ani">Paulina Aniśkiewicz</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
}

function TodoApp(props) {
  return (
    <section className={todoapp}>
      <header>
        <h1>todos</h1>
        <input
          className={newTodo}
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <section className={main}>
        <input className={toggleAll} type="checkbox" />
        <label className={label} for={toggleAll}>
          Mark all as complete
        </label>
        <ul className={todoList}>
          <li className={completed}>
            <div className={view}>
              <input className={toggle} type="checkbox" checked />
              <label className={label}>Taste JavaScript</label>
              <button className={destroy} />
            </div>
            <input className={edit} value="Create a TodoMVC template" />
          </li>
          <li>
            <div className={view}>
              <input className={toggle} type="checkbox" />
              <label className={label}>Buy a unicorn</label>
              <button className={destroy} />
            </div>
            <input className={edit} value="Rule the web" />
          </li>
        </ul>
      </section>
      <footer className={footer}>
        <span className={todoCount}>
          <strong>0</strong> item left
        </span>
        <ul className={filters}>
          <li>
            <a className={selected} href="#/">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clearCompleted">Clear completed</button>
      </footer>
    </section>
  );
}

export default TodoApp;
