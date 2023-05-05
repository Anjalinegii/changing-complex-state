import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function addname(event) {
    const value = event.target.value;
    const name = event.target.name;
    setFullName((previousValue) => {
      if (name === "fName") {
        return { fName: value, lName: previousValue.lName };
      } else if (name === "lName") {
        return { fName: previousValue.fName, lName: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input name="fName" onChange={addname} placeholder="First Name" />
        <input name="lName" onChange={addname} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
