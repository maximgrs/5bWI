import React, { useState } from "react";
import Subject from "../../components/Homework/Subject";

const HomeworkApp: React.FC = () => {
  const [subjects, setSubjects] = useState([
    {
      name: "Mathematik",
      homeworks: [
        { title: "Algebra", description: "Seite 42, Aufgabe 1-5" },
        { title: "Geometrie", description: "Seite 56, Aufgabe 3-7" },
      ],
    },
    {
      name: "Deutsch",
      homeworks: [
        {
          title: "Lesen",
          description: "Kapitel 3 lesen und Zusammenfassung schreiben",
        },
        { title: "Grammatik", description: "Seite 78, Aufgabe 2-4" },
      ],
    },
  ]);

  const [newHomework, setNewHomework] = useState({
    subject: "",
    title: "",
    description: "",
  });

  const handleAddHomework = () => {
    if (
      !newHomework.subject ||
      !newHomework.title ||
      !newHomework.description
    ) {
      alert("Bitte fülle alle Felder aus!");
      return;
    }

    const updatedSubjects = subjects.map((subject) => {
      if (subject.name === newHomework.subject) {
        return {
          ...subject,
          homeworks: [
            ...subject.homeworks,
            { title: newHomework.title, description: newHomework.description },
          ],
        };
      }
      return subject;
    });

    setSubjects(updatedSubjects);
    setNewHomework({ subject: "", title: "", description: "" });
  };

  const handleDeleteHomework = (subjectName: string, index: number) => {
    const updatedSubjects = subjects.map((subject) => {
      if (subject.name === subjectName) {
        return {
          ...subject,
          homeworks: subject.homeworks.filter((_, i) => i !== index),
        };
      }
      return subject;
    });

    setSubjects(updatedSubjects);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Hausaufgabenliste
        </h1>

        {/* Formular zum Hinzufügen von Hausaufgaben */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Neue Hausaufgabe hinzufügen
          </h2>
          <div className="space-y-4">
            <select
              value={newHomework.subject}
              onChange={(e) =>
                setNewHomework({ ...newHomework, subject: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Fach auswählen</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Titel"
              value={newHomework.title}
              onChange={(e) =>
                setNewHomework({ ...newHomework, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Beschreibung"
              value={newHomework.description}
              onChange={(e) =>
                setNewHomework({ ...newHomework, description: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleAddHomework}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Hausaufgabe hinzufügen
            </button>
          </div>
        </div>

        {/* Liste der Fächer und Hausaufgaben */}
        <div className="space-y-8">
          {subjects.map((subject, index) => (
            <Subject
              key={index}
              name={subject.name}
              homeworks={subject.homeworks}
              onDeleteHomework={(homeworkIndex) =>
                handleDeleteHomework(subject.name, homeworkIndex)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeworkApp;
