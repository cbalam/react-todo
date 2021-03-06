export default {
  filterTodos: function(todos, showCompleted, searchText) {

    if(todos.length === 0) {
      return [];
    }

    let filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos =  filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    if (searchText.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.toLowerCase().indexOf(searchText) >= 0;
      });
    }

    //Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};