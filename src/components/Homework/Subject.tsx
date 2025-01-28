import React from "react";
import Homework from "./Homework";

interface SubjectProps {
  name: string;
  homeworks: { title: string; description: string }[];
  onDeleteHomework: (index: number) => void;
}

const Subject: React.FC<SubjectProps> = ({
  name,
  homeworks,
  onDeleteHomework,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{name}</h2>
      <div className="space-y-4">
        {homeworks.map((hw, index) => (
          <Homework
            key={index}
            title={hw.title}
            description={hw.description}
            onDelete={() => onDeleteHomework(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Subject;
