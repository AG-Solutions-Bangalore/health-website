import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorMain from "./pages/error/ErrorMain.jsx";
import { HomeThreeOnePage } from "./pages/index.jsx";
import FloatingContact from "./pages/home-3/FloatingContact.jsx";
import LoadTop from "./components/ScrollToTop/LoadTop.jsx";
import Preloader from "./components/Preloader/index.jsx";
import ScrollToTop from "./components/ScrollToTop/index.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //preloader
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      {isLoading && <Preloader />}
      <FloatingContact />

      <ScrollToTop />
      <LoadTop />
      <Routes>
        <Route path="/" element={<HomeThreeOnePage />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </div>
  );
}

export default App;
