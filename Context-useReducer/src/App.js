import "./App.css";
import Input from "./Input";
function App() {
  return (
    <div className="App">
      {" "}
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}

export default App;
