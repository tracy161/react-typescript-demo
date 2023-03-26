import React from "react";
import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[]; // type Array
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
