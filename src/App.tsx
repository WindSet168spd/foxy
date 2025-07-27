import "./App.css";
import { useFoxyContext } from "./context/foxy-context";

function App() {
  const { trigger } = useFoxyContext();

  return (
    <div className="wrapper">
      <div onClick={trigger}>Hello</div>
    </div>
  );
}

export default App;
