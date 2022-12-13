import "./App.css";
import { HomePage } from "./page/homePage";
import { Education } from "./page/education";
import { WorkingExperience } from "./page/workingExperience";
import { Skill } from "./page/skill"
import { Project } from "./page/project";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Education />
      <WorkingExperience />
      <Skill/>
      <Project/>
    </div>
  );
}

export default App;
