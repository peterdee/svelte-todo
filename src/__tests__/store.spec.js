import { store } from "../store";

describe("Store", () => {
  test("Store should be created", () => {
    expect(store).toBeTruthy();
  });
  test("Store should have no todo items when created", () => {
    let todos = [];

    // create store subscription
    const unsubscribe = store.subscribe((state = {}) => {
      todos = state.todos;
    });

    expect(todos.length).toBe(0);

    // destroy store subscription
    return unsubscribe();
  });
  test("Store should have one todo item after adding", () => {
    const text = "Example1";
    let todos = [];

    // create store subscription
    const unsubscribe = store.subscribe((state = {}) => {
      todos = state.todos;
    });

    store.addTodo(text);
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe(text);

    // destroy store subscription
    return unsubscribe();
  });
  test("Store should have one todo item with 'completed' status", () => {
    let todos = [];

    // create store subscription
    const unsubscribe = store.subscribe((state = {}) => {
      todos = state.todos;
    });

    expect(todos.length).toBe(1);
    store.switchTodoStatus(Number(todos[0].id));
    expect(todos[0].completed).toBeTruthy();

    // destroy store subscription
    return unsubscribe();
  });
  test("Store should have one todo item after deletion", () => {
    const text = "Example2";
    let todos = [];

    // create store subscription
    const unsubscribe = store.subscribe((state = {}) => {
      todos = state.todos;
    });

    expect(todos.length).toBe(1);
    store.addTodo(text);
    expect(todos.length).toBe(2);
    store.deleteTodo(Number(todos[0].id));
    expect(todos.length).toBe(1);
    expect(todos[0].completed).toBeFalsy();
    expect(todos[0].text).toBe(text);

    // destroy store subscription
    return unsubscribe();
  });
});
