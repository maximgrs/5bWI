import React from "react";
import Homework from "./Homework";

interface SubjectProps {
  name: string;
  homeworks: { title: string; description: string }[];
}

const Subject: React.FC<SubjectProps> = ({ name, homeworks }) => {
  return (
    <div>
      <h2>{name}</h2>
      {homeworks.map((hw, index) => (
        <Homework key={index} title={hw.title} description={hw.description} />
      ))}
    </div>
  );
};

export default Subject;
