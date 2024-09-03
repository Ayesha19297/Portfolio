import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
        <div className="fixed top-0 -z-10 h-full w-full ">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#eee8e7_1px,transparent_1px),linear-gradient(to_bottom,#c8fbf3_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_900px_at_100%_200px,#ddadf5,#85f8ab,transparent)]"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
      </div>
    </>
  );
};

export default App;
