import "./App.css";
import Resume from "./Componants/UserActions/Resume";
import View from "./Componants/UserActions/View";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <View/>}></Route>
          <Route path="/list" element={ <Resume/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
