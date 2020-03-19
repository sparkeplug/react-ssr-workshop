import React from "react";

export default function App(props) {
  const facts = props.facts.map((fact, i) => {
    return <li key={i}>{fact.text}</li>;
  });
  return <ul>{facts}</ul>;
}
