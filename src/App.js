import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Services />
                    <Contact />
                  </>
                }
              />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
