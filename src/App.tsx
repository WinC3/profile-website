import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>hello</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>yoo</Button>
    </div>
  );
}

export default App;
