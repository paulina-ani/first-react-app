import React, { Fragment } from "react";
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

function TodoInput(props) {
  return (
    <input className={newTodo} placeholder="What needs to be done?" autofocus />
  );
}

function TodoItemCompleted(props) {
  return (
    <li className={completed}>
      <div className={view}>
        <input className={toggle} type="checkbox" checked />
        <label className={label}>Taste JavaScript</label>
        <button className={destroy} />
      </div>
      <input className={edit} value="Create a TodoMVC template" />
    </li>
  );
}

function TodoItem(props) {
  return (
    <li>
      <div className={view}>
        <input className={toggle} type="checkbox" />
        <label className={label}>Buy a unicorn</label>
        <button className={destroy} />
      </div>
      <input className={edit} value="Rule the web" />
    </li>
  );
}

function ToggleAll(props) {
  return (
    <Fragment>
      <input className={toggleAll} type="checkbox" />
      <label className={label} for={toggleAll}>
        Mark all as complete
      </label>
    </Fragment>
  );
}

function TodoList(props) {
  return (
    <ul className={todoList}>
      <TodoItem />
      <TodoItemCompleted />
    </ul>
  );
}

function TodoCount(props) {
  return (
    <span className={todoCount}>
      <strong>0</strong> item left
    </span>
  );
}

function TodoFilters(props) {
  return (
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
  );
}

function TodoFooter(props) {
  return (
    <footer className={footer}>
      <TodoCount />
      <TodoFilters />
      <button className="clearCompleted">Clear completed</button>
    </footer>
  );
}

function SiteFooter(props) {
  return (
    <footer className={info}>
      <p>Double-click to edit a todo</p>
      <p>
        Created by
        <a href="hhttps://github.com/paulina-ani"> Paulina Aniśkiewicz</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  );
}

function TodoApp(props) {
  return (
    <div>
      <section className={todoapp}>
        <header>
          <h1>todos</h1>
          <TodoInput />
        </header>
        <section className={main}>
          <ToggleAll />
          <TodoList />
        </section>
        <TodoFooter />
      </section>
      <SiteFooter />
    </div>
  );
}

export default TodoApp;
