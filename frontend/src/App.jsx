import React, { useEffect, useState } from "react";

async function fetchCount() {
  const URL = "http://localhost:8080/";

  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCount();
        setCount(data.count);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [count]);

  return (
    <div className="app">
      <span className="count">{count}</span>
      <p>people have visited this page</p>
    </div>
  );
}

export default App;
