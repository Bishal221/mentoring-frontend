import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <div className="app">
      {isLoading ?
        <></> : ''
      }
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </>
    </div>
  )
}
