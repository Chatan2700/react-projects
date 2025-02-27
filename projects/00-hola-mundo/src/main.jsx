import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";

const root = createRoot(document.getElementById("root"));

const user = {
  name: "Sebastian Rios",
  imgUrl: "https://avatars.githubusercontent.com/u/97331014?v=4",
  imgSize: 90,
};

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

root.render(
  <React.Fragment>
    <h1>Welcome to my app, {user.name}</h1>
    <img
      className="img"
      src={user.imgUrl}
      alt={"Photo of " + user.name}
      style={{
        width: user.imgSize,
        height: user.imgSize,
      }}
    />
    <br />
    <h1>Counters that update separately</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
  </React.Fragment>
);
