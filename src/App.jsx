import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </MainLayout>
    </>
  );
}

export default App;
