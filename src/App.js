import { Topmenu } from "./header/top-menu/Topmenu"
import { About } from "./header/about/About"
import "./App.css"
import { SkillLayout } from "./skill/SkillLayout"
import { Experience } from "./experience/Experience"
export default function App(){
  return (
    <div className="App">
  <div className="header">
    <Topmenu />
    <About />
  </div>
  <div className="Skill">
<SkillLayout />
  </div>
  <div className="Experience">
    <Experience />
  </div>
  </div>
  )
}