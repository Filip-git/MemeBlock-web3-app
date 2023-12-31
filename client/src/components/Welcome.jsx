import React, { useContext } from 'react'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { TransactionContext } from '../context/TransactionContext'
import { Loader } from './';
import { shortenEthereumAddress } from "../utils/shortenEthereumAddress";


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.00001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='my-2 w-full rounded-lg p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
    />
);


const Welcome = () => {

    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, setFormData, isLoading } = useContext(TransactionContext);


    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    };


    return (
        <div className='flex w-full justify-center items-center' data-aos="zoom-in" data-aos-duration="2000">
            <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 p-12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-16' >
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>Send Memes <br /> accross the world</h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Where GIFs Come to Life!</p>

                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <p className='text-white text-base font-semibold'>Connect wallet</p>
                        </button>
                    )}


                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                            Fun
                        </div>
                        <div className={companyCommonStyles}>Secure</div>
                        <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={companyCommonStyles}>Low Fees</div>
                        <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
                    <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 my-5 eth-card white-glassmorphism'>
                        <div className='flex justify-between flex-col w-full h-full'>
                            <div className='flex justify-between items-start'>
                                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'><SiEthereum fontSize={21} color='white' /></div>
                                <a href='https://github.com/Filip-git/MemeBlock-web3-app#readme' target="_blank" rel="noreferrer"> <BsInfoCircle color='white' /></a>
                            </div>
                            <div>
                                <a href={`https://goerli.etherscan.io/address/${currentAccount}`} target="_blank" rel="noreferrer" className="text-[#37c7da] hover:underline">
                                    <p className='text-white font-light text-sm'> {shortenEthereumAddress(currentAccount)}
                                    </p>
                                </a>
                                <p className="text-white font-semibold text-lg">Ethereum</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-start blue-glassmorphism'>
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />



                        {isLoading ? (
                            <div className="flex w-full justify-center">
                                <Loader />
                            </div>

                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Send now
                            </button>

                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome;