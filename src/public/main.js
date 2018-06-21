const React = require("react");
const ReactDom = require("react-dom");

const Request = body => {
  return {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
};

const URL = "http://localhost:3000/todos";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  async componentWillMount() {
    const res = await fetch(URL);
    const todos = await res.json();
    this.setState({ todos });
  }

  async saveTodo(e) {
    e.preventDefault();
    const request = Request({ todo: e.target.todo.value });
    const res = await fetch(URL, request);
    const todos = await res.json();
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id}>{todo.text} - added by: {todo.user.name}</li>
            );
          })}
        </ul>
        <form onSubmit={this.saveTodo}>
          <input name="todo" type="text" placeholder="todo" />
        </form>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("content"));
