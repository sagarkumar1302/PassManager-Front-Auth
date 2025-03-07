import React from "react";

const Footer = () => {
  return (
    <footer className="shadow-inner shadow-white bg-black flex justify-center  px-4 py-5 fixed bottom-0 w-full">
      <div className="container flex md:flex-row flex-col justify-center gap-3 md:justify-between items-center">
        <div className="logo text-center font-bold text-white text-xl md:text-3xl">
          <div><span className="text-green-400">&lt;</span>PassManager
          <span className="text-green-400">/&gt;</span></div>
          <h3 className="text-xl font-light mt-2">All Copyrights by Sagar Kumar</h3>
        </div>
        <div className="github">
            <a href="https://github.com/sagarkumar1302" target="blank">
            <img src="./icons/github.png" width={40} alt="github" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
