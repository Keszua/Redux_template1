import React from "react";
import { connect } from "react-redux";

import Todo from "../components/Todo";
import { toggleTodo } from "../actions/todo.actions";
import { AVAILABLE_FILTERS } from "../actions/todo.actions";

const TodoList = ({ todos, toggleTodo }) => {
  //return <pre>{JSON.stringify(todos, null, 2)}</pre>;

  //const toogleTodo = () => {};

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

const filerTodos = (todos, filter) => {
  switch (filter) {
    case AVAILABLE_FILTERS.SHOW_COMPLETE:
      return todos.filter(todo => todo.complete === true);
    case AVAILABLE_FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => todo.complete === false);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  //todos: state.todos
  todos: filerTodos(state.todos, state.filter)
});

const mapDispatchToProps = {
  toggleTodo
};

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
