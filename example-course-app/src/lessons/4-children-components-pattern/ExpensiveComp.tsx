import {useState} from "react";

function ExpensiveComponent() {
  return <div>Expensive component</div>;
}

export function Component() {
  //@ts-ignore
  const [count, setCount] = useState(0);

  return (
      <div>
        {count}
        {/* ❌ Expensive component will re-render unnecessarily everytime count changes */}
        <ExpensiveComponent />
      </div>
  );
}