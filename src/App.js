import { Topmenu } from "./header/top-menu/Topmenu"
import { About } from "./header/about/About"
import "./App.css"

export default function App(){
  return (
    <div className="App">
  <div className="header">
    <Topmenu />
    <About />
  </div>
  </div>
  )
}