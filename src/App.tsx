import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TypescriptLogo from "./assets/typescript.svg";
import "./App.css";
import Formulaire from "./components/formulaire";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={TypescriptLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex items-center justify-center font-mono">
        <Formulaire />
      </div>
    </>
  );
}

export default App;
