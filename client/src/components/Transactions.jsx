import React, { useContext, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import { shortenEthereumAddress } from "../utils/shortenEthereumAddress";

export const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url, transactions }) => {
    const gifUrl = useFetch({ keyword });
    const transactionList = Array.isArray(transactions) ? transactions : [];

    return (
        <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer" className="text-[#37c7da] hover:underline">
                        <p className="text-white text-base">
                            <span className="text-[#37c7da] font-bold">From:</span> {shortenEthereumAddress(addressFrom)}
                        </p>
                    </a>
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer" className="text-[#37c7da] hover:underline">
                        <p className="text-white text-base">
                            <span className="text-[#37c7da] font-bold">To:</span> {shortenEthereumAddress(addressTo)}
                        </p>
                    </a>
                    <p className="text-[#37c7da] text-base">
                        <span className="font-bold">Amount:</span>{" "}
                        <span className="text-white  italic">
                            <FaEthereum className="inline mr-1 w-3 h-4" />
                            <span className="inline">{amount} ETH</span>
                        </span>
                    </p>
                    <p className="text-[#37c7da] text-base">
                        <span className="font-bold">Time:</span>{" "}
                        <span className="text-white italic">{timestamp}</span>
                    </p>
                </div>
                <img
                    src={gifUrl || url}
                    alt=""
                    className="w-full h-64 2xl:h-96 rounded-lg shadow-lg object-cover"
                />
                <div className="bg-[#191819] p-3 px-5 w-max rounded-2xl -mt-5 shadow-2xl">
                    <p className="text-white font-bold">{message}</p>
                </div>
            </div>
        </div>
    );
};

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 3;

    const transactionList = Array.isArray(transactions) ? transactions : [];

    // Reverse the transaction list to ensure the newest transactions appear first.
    const reversedTransactionList = [...transactionList].reverse();

    // Calculate the indexes for the transactions to display on the current page.
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    const transactionsToDisplay = reversedTransactionList.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-center my-2" data-aos="fade-up">
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2" data-aos="fade-up">
                        Connect your account to see the latest transactions
                    </h3>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
                    {transactionsToDisplay.map((transaction, i) => (
                        <div key={i} data-aos="fade-up">
                            <TransactionsCard {...transaction} />
                        </div>
                    ))}
                </div>

                {reversedTransactionList.length > transactionsPerPage && (
                    <div className="flex justify-center mt-4" data-aos="fade-up">
                        {Array.from(Array(Math.ceil(reversedTransactionList.length / transactionsPerPage)).keys()).map((index) => (
                            <button
                                key={index}
                                className={`mx-2 p-2 cursor-pointer ${currentPage === index + 1 ? 'text-blue-500' : 'text-white'}`}
                                onClick={() => handlePageChange(index + 1)}

                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Transactions;
