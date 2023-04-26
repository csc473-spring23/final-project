import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.text())
      .then((message) => setMessage(message));
  }, []);

  return <p>{message}</p>;
}

export default App;
