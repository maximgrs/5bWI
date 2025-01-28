import React from "react";

interface HomeworkProps {
  title: string;
  description: string;
  onDelete: () => void;
}

const Homework: React.FC<HomeworkProps> = ({
  title,
  description,
  onDelete,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
      >
        Löschen
      </button>
    </div>
  );
};

export default Homework;
