import "./App.css";
import PeopleContainer from "./components/PeopleContainer";
import HomeworkApp from "./molecules/Homework/HomeworkApp";

function App() {
  return (
    <>
      <div className="p-10 min-h-screen w-screen bg-black">
        <div className="flex justify-end font-bold text-4xl pb-5 text-white">
          <h1>HTL Dornbirn 5bWI</h1>
        </div>
        <PeopleContainer />
      </div>
      <HomeworkApp />
    </>
  );
}

export default App;
