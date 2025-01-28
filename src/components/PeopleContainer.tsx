import React, { useEffect, useState } from "react";
import Card from "./Card";

type Person = {
  id: number;
  name: string;
  description: string;
  age: number;
  imageUrl: string;
};

export default function PeopleContainer() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://10.115.1.39:8055/items/students").then((response) =>
      response.json().then((data) => {
        setPeople(data.data);
      })
    );
  });

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      {people.map((person: Person) => (
        <Card
          name={person.name}
          description={person.description}
          age={person.age}
          imageUrl={person.imageUrl}
        />
      ))}
    </div>
  );
}
