import { HiMenuAlt4 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

import logo from '../assets/images/logo.png';
import { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const NavBarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

export const Navbar = () => {
    const { currentAccount, connectWallet } = useContext(TransactionContext);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex md:justify-center justify between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "News", "Education"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}
                {currentAccount ? (
                    null
                ) : (
                    <li className="bg-[#2952e3] py-3 px-4 mx-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        <button
                            type="button"
                            onClick={connectWallet}
                        >
                            Connect wallet
                        </button>
                    </li>
                )}
            </ul>

            <div className='flex relative'>
                {toggleMenu
                    ? <MdOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                        className="z-10 fixed -top-0 -right-2 p-3 w-[30vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className='text-xl w-full my-2'>
                            <MdOutlineClose onClick={() => setToggleMenu(false)} className='cursor-pointer' />
                        </li>
                        {["Market", "Exchange", "News", "Education"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classProps='my-2' />
                        ))}


                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
