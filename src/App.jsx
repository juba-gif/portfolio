import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
      </MainLayout>
    </>
  );
}

export default App;
