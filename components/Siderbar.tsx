import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sliderbar = () => {
  return (
    <div>
      <img
        src="/ady.jpg"
        alt="user avatar"
        className="w-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider space-x-2 font-classic">
        <span className=" text-green">Ady </span>
        Masivi<br></br>
        <span className="text-blue-400">Masanzambi</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Développeur web</p>

      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Dowmload Resume
      </a>
      {/* //social media icon */}

      <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
        <a href="">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/ady243">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* //address*/}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Ile de france</span>
        </div>
        <p className="my-2">masiviady7@gmail.com</p>
        <p className="my-2">0661172371</p>
      </div>
      {/* //email buttom*/}
      <button
        className="bg-gradient-to-r from-green to-blue w-8/12 rounded-full py-2 px-2 to-blue-400 my-2
        focus:outline-none"
        onClick={() => window.open("mailto:masiviady7@gmail.com")}
      >
        Email
      </button>
      <button className="bg-gradient-to-r from-green to-blue w-8/12 rounded-full py-2 px-2 to-blue-400 my-2">
        Sombre mode
      </button>
    </div>
  );
};

export default Sliderbar;
