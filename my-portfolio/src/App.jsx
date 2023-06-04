import { createContext, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
export const ThemeContext =   createContext(null)

function App() {
  const [theme, setTheme] = useState("light")
const toggleTheme = ()=>{
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
}
  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
  <div className="App" id={theme}>
    <Sidebar  theme = {theme} setTheme={setTheme} toggleTheme={toggleTheme} />
  </div>
     </ThemeContext.Provider>
  )
}

export default App;
