import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  type Animal = "Dog" | "Cat" | "Fish" | "Bird";
  type Domestic = "Dog" | "Cat" | "Parrot";

  // Extract domestic animals from the list of animals
  type DomesticAnimals = Extract<Animal, Domestic>; // 'Dog' || 'cat'

  // Exclude domestic animals from the list of animals
  type WildAnimals = Exclude<Animal, Domestic>; // "Fish" | "Bird"

  const housePet: DomesticAnimals = "Cat";
  const outdoorPet: WildAnimals = "Bird";

  interface EmployeeType {
    id: number;
    fullname: string;
    role: string;
  }

  const employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
  };

  // 0: { id: 1, fullname: "John Doe", role: "Designer" },
  // 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
  // 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Vite + React + {housePet} & {outdoorPet}
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <section>
        <ul>
          {Object.values(employees).map((employee) => (
            <li key={employee.id}>
              <strong>ID:</strong> {employee.id}
              <br />
              <strong>Full Name:</strong> {employee.fullname}
              <br />
              <strong>Role:</strong> {employee.role}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
