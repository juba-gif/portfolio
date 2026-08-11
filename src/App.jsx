import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Stack />
      </MainLayout>
    </>
  );
}

export default App;
