import { writable } from 'svelte/store';

// load existing todos from localStorage
const existingTodos = localStorage.getItem('todos');

// create initial state
const initialState = {
  todos: existingTodos ? JSON.parse(existingTodos) : [],
};

/**
 * Create application store
 * @returns {object}
 */
function createStore() {
	const { subscribe, update } = writable(initialState);

  // return exposed methods
	return {
    /**
     * Add a new todo
     * @param text {string} - text of a todo
     * @returns {object} - new store state object
     */
    addTodo: (text = '') => update((state = {}) => {
      // update array
      const todos = [
        ...state.todos,
        {
          id: Date.now(),
          completed: false,
          text,
        },
      ];

      // update localStorage
      localStorage.setItem('todos', JSON.stringify(todos));

      // return new state
      return {
        ...state,
        todos,
      };
    }),
    /**
     * Delete todo item
     * @param todoId {number} - ID of a todo item
     * @returns {object} - new store state object
     */
    deleteTodo: (todoId = null) => update((state = {}) => {
      // update array
      const todos = [...state.todos.filter(({ id = null }) => id !== todoId)];

      // update localStorage
      localStorage.setItem('todos', JSON.stringify(todos));

      // return new state
      return {
        ...state,
        todos,
      };
    }),
    /**
     * Switch completed status for a todo item
     * @param todoId {number} - ID of a todo item
     * @returns {object} - new store state object
     */
    switchTodoStatus: (todoId = null) => update((state = {}) => {
      // update array
      const todos = [...state.todos.reduce((arr, item) => {
        const mutable = { ...item };
        if (mutable.id === todoId) {
          mutable.completed = !mutable.completed;
        }
        arr.push(mutable);
        return arr;
      }, [])];

      // update localStorage
      localStorage.setItem('todos', JSON.stringify(todos));

      // return new state
      return {
        ...state,
        todos,
      };
    }),
    subscribe,
	};
}

export const store = createStore();
