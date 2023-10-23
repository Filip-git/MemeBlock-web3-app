import React from 'react'
import { Link } from 'react-scroll';
import logo from "../assets/images/logo.png";


const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logo} alt="logo" className="w-32" />
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <Link
                    to="market" // Use the id of the target section
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
                </Link>
                <Link
                    to="transactions" // Use the id of the target section
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Transactions</p>
                </Link>
                <Link
                    to="news" // Use the id of the target section
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p className="text-white text-base text-center mx-2 cursor-pointer">News</p>
                </Link>
                <Link
                    to="education" // Use the id of the target section
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Education</p>
                </Link>
                <a href="https://github.com/Filip-git/MemeBlock-web3-app" target="_blank" rel="noopener noreferrer" className="text-white text-base text-center mx-2 cursor-pointer">GitHub</a>
            </div>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">MemeBlock</p>
            <p className="text-white text-right text-xs">filip.oroz@fsre.sum.ba</p>
        </div>
    </div>
);

export default Footer;