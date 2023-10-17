import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { ImHappy } from "react-icons/im";
import { TfiMoney } from "react-icons/tfi";
import { GrTransaction } from "react-icons/gr";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                    Discover What Sets Our App Apart
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    Welcome to the ultimate Web3 app for endless fun! Share memes and gifs with your friends and family, and watch them stay here forever.
                </p>

            </div>

            <div className="flex-1 flex flex-col justify-start items-center">
                <div className="flex flex-col md:space-y-4 space-y-2">
                    <ServiceCard
                        color="bg-[#2952E3]"
                        title="Security guarantee"
                        icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                        subtitle="Rest easy, we've got security locked down, and your privacy and product quality are in good hands."
                    />
                    <ServiceCard
                        color="bg-[#ff7a87]"
                        title="Ultra fast transactions"
                        icon={<GrTransaction fontSize={21} className="text-white" />}
                        subtitle="Experience lightning-fast transactions courtesy of our utilization of the Ethereum network."
                    />
                    <ServiceCard
                        color="bg-[#F84550]"
                        title="No hidden fees"
                        icon={<TfiMoney fontSize={21} className="text-white" />}
                        subtitle="No hidden fees here; we believe in transparent pricing and you will never get additional fees for our services."
                    />
                    <ServiceCard
                        color="bg-[#6d60e3]"
                        title="Fun guaranteed"
                        icon={<ImHappy fontSize={21} className="text-white" />}
                        subtitle="Dive into a world of fun with our app, perfect for sharing memes and gifs that will keep you entertained."
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Services;
