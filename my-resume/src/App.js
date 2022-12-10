import "./App.css";
import { HomePage } from "./page/homePage";
import { Education } from "./page/education";
import { WorkingExperience } from "./page/workingExperience";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Education />
      <WorkingExperience />
    </div>
  );
}

export default App;
