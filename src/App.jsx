import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import Scene from "./components/Scene";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Services } from "./components/sections/Services";

import { Footer } from "./components/sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className="relative min-h-screen text-gray-100">
        <div className="fixed inset-0 -z-20">
          <Scene />
        </div>
        <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 -z-10 pointer-events-none" />
        <div
          className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <main className="space-y-2">
            <Home />
            <Services />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
