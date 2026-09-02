import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
      </MainLayout>
    </>
  );
}

export default App;
