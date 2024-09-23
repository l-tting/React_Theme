import { ThemeSwitcher } from "./components/themeswitcher";
import { ThemeProvider } from "./components/ThemeContext";

function App(){
  return(
    <>
    <ThemeProvider>
    <ThemeSwitcher/>
    </ThemeProvider>
   
    
    </>
  )
}
export default App;