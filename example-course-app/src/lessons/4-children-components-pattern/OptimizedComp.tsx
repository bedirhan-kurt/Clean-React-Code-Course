import {ReactNode, useState} from "react";

function ExpensiveComponent() {
  return <div>Expensive component</div>;
}

function Component({ children }: { children: ReactNode }) {
  //@ts-ignore
  const [count, setCount] = useState(0);

  // ✅ Children don't re-render when state changes
  return <div>{children}</div>;
}

export function App() {
  return (
      <Component>
        {/* ✅ Expensive component will not re-render when Component does */}
        <ExpensiveComponent />
      </Component>
  );
}