const todos = (state = [], action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text
        }
      ];

    case "TOGGLE_TODO":
      return state.map(todo => {
        const isToggledTodo = todo.id === action.id;

        return {
          ...todo,
          complete: isToggledTodo ? !todo.complete : todo.complete
        };
      });

    default:
      return state;
  }
};

export default todos;
