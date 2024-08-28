import Button from "rac-button-test/dist/main.js";
import { DialogTrigger, Popover } from "react-aria-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DialogTrigger>
          <Button>Open Popover</Button>
          <Popover style={{ background: "grey", padding: 8 }}>
            <h2>Popover</h2>
            <p>Popover content</p>
          </Popover>
        </DialogTrigger>
      </header>
    </div>
  );
}

export default App;
