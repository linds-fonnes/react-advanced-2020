import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "RANDOM MESSAGE",
  });

  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState('raandom message');

  const changeMessage = () => {
    setPerson({ ...person, message: "HELLOOOOO WORLD" }); //Use spead operator so that you can copy the old values from the object and then decide which ones to change. Otherwise it will wipe out all the other values
    // setMessage('HELLLLO WORLD'); --If you set up the states individually instead of in an object you can access them this way instead
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
