import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { render } from "react-dom";

import { TodoStore } from "./models/TodoStore";
import { TodoList } from "./components/TodoList";

const store = TodoStore.create({
  todos: [
    {
      title: "Get Coffee",
      description: "at The Coffee House"
    },
    {
      title: "Write simpler code",
      description: "Javascript"
    }
  ]
});

render(<TodoList todoStore={store} />, document.getElementById("root"));
