import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-10 text-center text-5xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-blue-400" />
          <h2 className="text-center">HTML5</h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3 className="text-7xl text-orange-400" />
          <h2 className="text-center">CSS</h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
          <h2 className="text-center">Javascript</h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-500" />
          <h2 className="text-center">React.js</h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
          <h2 className="text-center">Node.js</h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
          <h2 className="text-center">Mongo DB</h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl text-gray-500" />
          <h2 className="text-center">SQL</h2>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
