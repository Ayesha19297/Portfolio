import { TbHexagonLetterA } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-4 flex items-center justify-between py-6">
      <div className="flex text-4xl">
        <TbHexagonLetterA />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ayesha19297"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/Ayesha19297"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:ayesha19297@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
