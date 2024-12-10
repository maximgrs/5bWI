import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Directus } from "@directus/sdk";

const directus = new Directus("http://10.115.1.39:8055");

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await directus.auth.login({
          email: "admin@example.com",
          password: "d1r3ctu5",
        });

        const response = await directus.items("students").readByQuery();
        setPeople(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      {people.map((person) => (
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
