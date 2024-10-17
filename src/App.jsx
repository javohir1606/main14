import { useState } from "react";
import { Route, Routes } from "react-router-dom/dist";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route>
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<Home />}/>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
