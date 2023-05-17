import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const team = [1,2,3,4]
  const sultan =["sultan","loves"]
  useEffect(() => {
    add();
  }, []);
  const [bro, setbro] = useState([]);
  const [newText, setnewText] = useState("");
  const add = () => {
    bro.push(newText);
    console.log(bro);
  };

  console.log("What u are u doing")
  return (
    <>
      {bro.length ||bro.map((e, i) => {
        return (
          <>
            <ul>
              <li>{e}</li>
            </ul>
          </>
        );
      })}
      <>
        <input onChange={(e) => setnewText(e.target.value)}></input>
        <button onClick={() => add()}>add</button>
      </>
    </>
  );
}

export default App;
