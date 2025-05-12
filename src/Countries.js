import { useState } from "react";

const Country = ({ name, flagUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
        gap: "10px",
        border: "solid 1px gray",
        borderRadius: "5px",
      }}
    >
      <img
        src={flagUrl}
        alt="Flag"
        style={{ width: "100px", height: "100px" }}
        />
        <h2>{name}</h2>
    </div>
  );
};

export const Countries = () => {
  const [flagsData, setFlagsData] = useState([]);
  fetch("https://xcountries-backend.azurewebsites.net/all")
    .then((res) => res.json())  
    .then((data) => setFlagsData(data))
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
  return (
    <div 
    style={{
      display: "flex",
      flexWrap:"wrap",
      alignItems: "center",
      justifyContent: "center",
      textAlign:"center",
      gap: "10px",
      margin:"10px",
      borderRadius: "5px",
    }}>
      {flagsData.map(({ name, flag, abbr }) => (
        <Country key={abbr} name={name} flagUrl={flag} />
      ))}
    </div>
  );
};
