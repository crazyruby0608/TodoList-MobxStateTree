import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { render } from "react-dom";

import { TodoStore } from "./models/TodoStore";
import { TodoList } from "./components/TodoList";

const store = TodoStore.create({
  todos: [
    {
      title: "Get Coffee"
    },
    {
      title: "Write simpler code"
    },
    {
      title: "Do exercise"
    },
    {
      title: "Do housework"
    },
  ]
});

render(<TodoList todoStore={store} />, document.getElementById("root"));
