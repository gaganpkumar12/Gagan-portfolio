import {  Linkedin, Github } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {[
       
        { icon: <Github />, url: "https://github.com/gaganpkumar12" },
        { icon: <Linkedin />, url: "https://www.linkedin.com/in/gaganpkumar/" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 transition-all duration-300 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
