import { HERO_CONTENT } from "../constants";
import profile from "../assets/me_working.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-pink-600 via-slate-600 to-purple-600 bg-clip-text text-transparent">
              Ayesha.
            </h1>
            <span className="bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Frontend developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="rounded-full h-80 w-80"
              src={profile}
              alt="Ayesha"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
