import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
        <div className="flixed top-0 -z-10 h-full w-full ">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default App;
