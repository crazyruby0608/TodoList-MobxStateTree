import { observer } from "mobx-react";
import * as React from "react";

export const Todo = observer(({ todo }) => (
  <li>
    <div>
      <input type="checkbox" checked={todo.finished} onClick={todo.toggle} />
      {todo.title}
    </div>
    <div>{todo.description}</div>
  </li>
));
