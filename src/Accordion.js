import React, { useState, useEffect } from "react";
import CustomAccordion from "./CustomAccordion";

import axios from "axios";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error loading data", error);
        setError(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data.map((user, index) => (
          <CustomAccordion key={index} header={user.name} body={user.email} />
        ))}
      </header>
    </div>
  );
};

export default Accordion;
