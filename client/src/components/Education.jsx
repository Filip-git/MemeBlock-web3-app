import React, { useState } from 'react';

const educationSlides = [
    {
        title: 'Ethereum Introduction',
        content: 'Ethereum is a decentralized blockchain platform that allows developers to build decentralized applications (DApps) using smart contracts.'
    },
    {
        title: 'Blockchain Technology',
        content: 'Blockchain is a distributed ledger technology that records transactions across a network of computers, ensuring transparency and security.'
    },
    {
        title: 'Smart Contracts',
        content: 'Smart contracts are self-executing contracts with the terms of an agreement directly written into code, automating various processes.'
    },
    {
        title: 'Solidity Programming',
        content: 'Solidity is a high-level programming language used to write smart contracts on the Ethereum platform.'
    },
    {
        title: 'ERC-20 Tokens',
        content: 'ERC-20 is a standard interface for fungible tokens on the Ethereum blockchain, enabling the creation of various digital assets.'
    },
    {
        title: 'MetaMask Wallet',
        content: 'MetaMask is a popular cryptocurrency wallet and gateway to Ethereum-based DApps, making it easy to manage assets and interact with the blockchain.'
    },
    {
        title: 'Bitcoin Overview',
        content: 'Bitcoin is the first cryptocurrency, created by an anonymous entity known as Satoshi Nakamoto, designed as a decentralized, peer-to-peer digital currency.'
    },
    {
        title: 'Decentralized Finance (DeFi)',
        content: 'DeFi is a blockchain-based financial ecosystem that offers decentralized lending, borrowing, and trading of assets, revolutionizing traditional finance.'
    },
    {
        title: 'Consensus Mechanisms',
        content: 'Consensus mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) ensure the security and reliability of blockchain networks.'
    },
    {
        title: 'Use Cases of Blockchain',
        content: 'Blockchain technology finds applications beyond cryptocurrencies, including supply chain management, voting systems, and identity verification.'
    },
];


const questions = [
    {
        question: 'What is the primary purpose of Ethereum, and how does it differ from Bitcoin?',
        options: ['Ethereum is designed for decentralized applications (DApps), while Bitcoin is a digital currency.', 'Ethereum is a peer-to-peer currency, while Bitcoin is for smart contracts.', 'Ethereum and Bitcoin serve the same purpose.'],
        correctAnswer: 0,
    },
    {
        question: 'Explain the concept of a blockchain and its core features.',
        options: ['A blockchain is a centralized ledger with single-point control.', 'A blockchain is a decentralized, transparent, and secure ledger recording transactions.', 'A blockchain is a digital currency.'],
        correctAnswer: 1,
    },
    {
        question: 'How do smart contracts work, and what are their advantages in various industries?',
        options: ['Smart contracts are paper-based agreements, and they have no advantages.', 'Smart contracts are legal documents that require intermediaries.', 'Smart contracts are self-executing code with automated processes, offering security, transparency, and efficiency in various industries.'],
        correctAnswer: 2,
    },
    {
        question: 'Name the programming language used for developing smart contracts on Ethereum.',
        options: ['Python', 'Solidity', 'Java'],
        correctAnswer: 1,
    },
    {
        question: 'What is the ERC-20 standard, and how is it significant in the world of cryptocurrencies?',
        options: ['ERC-20 is a video game console.', 'ERC-20 is a standard for non-fungible tokens.', 'ERC-20 is a standard for fungible tokens on the Ethereum blockchain, enabling the creation of various digital assets.'],
        correctAnswer: 2,
    },
    {
        question: 'Describe the role of MetaMask in the Ethereum ecosystem and using DApps.',
        options: ['MetaMask is a cooking recipe app.', 'MetaMask is used for decentralized voting.', 'MetaMask is a cryptocurrency wallet and gateway to Ethereum-based DApps, simplifying asset management and DApp interactions.'],
        correctAnswer: 2,
    },
    {
        question: 'Who is the anonymous creator of Bitcoin, and what problem was Bitcoin designed to solve?',
        options: ['Vitalik Buterin, solving decentralized finance issues.', 'Satoshi Nakamoto, addressing data privacy challenges.', 'Satoshi Nakamoto, creating a decentralized, peer-to-peer digital currency.'],
        correctAnswer: 2,
    },
    {
        question: 'What is DeFi, and how does it impact traditional financial systems?',
        options: ['DeFi is short for "Deaf Finance," and it has no impact on traditional finance.', 'DeFi is a programming language used in blockchain development.', 'DeFi is decentralized finance, revolutionizing traditional finance through lending, borrowing, and asset trading.'],
        correctAnswer: 2,
    },
    {
        question: 'Differentiate between Proof of Work (PoW) and Proof of Stake (PoS) consensus mechanisms.',
        options: ['PoW and PoS are two cryptocurrencies with no differences.', 'PoW requires miners to solve complex mathematical puzzles, while PoS relies on validators who hold and "stake" cryptocurrencies.', 'PoW and PoS serve the same function.'],
        correctAnswer: 1,
    },
    {
        question: 'Provide two real-world examples of how blockchain technology can be applied to improve existing systems.',
        options: ['Blockchain has no real-world applications.', 'Blockchain can enhance supply chain transparency and improve secure voting systems.', 'Blockchain is solely for creating digital currencies.'],
        correctAnswer: 1,
    },
];


const Education = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showQuiz, setShowQuiz] = useState(false);

    const handleAnswerClick = (selectedOptionIndex) => {
        if (selectedOption === null) { // Check if the user has not selected an answer yet
            const correctAnswerIndex = questions[currentQuestion].correctAnswer;
            const isCorrect = selectedOptionIndex === correctAnswerIndex;
            setSelectedOption(selectedOptionIndex);

            if (isCorrect) {
                setScore(score + 1);
            }

            setTimeout(() => {
                if (currentQuestion + 1 < questions.length) {
                    setCurrentQuestion(currentQuestion + 1);
                    setSelectedOption(null);
                } else {
                    setShowResult(true);
                }
            }, 900); // Delay before moving to the next question
        }
    };


    const nextSlide = () => {
        if (currentSlide < educationSlides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const startQuiz = () => {
        setCurrentSlide(educationSlides.length);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
    };

    const showEducation = () => {
        setCurrentSlide(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setShowQuiz(false);
    };

    return (
        <section id='education'>
            <div className="flex w-full justify-center items-center gradient-bg-education">
                <div className="min-h-screen flex items-center justify-center ">
                    <div data-aos="zoom-out-down">
                        <div className="bg-black text-white p-4 rounded-lg shadow-md w-full max-w-screen-sm">
                            {showResult ? (
                                <div className="result-container">
                                    <h2 className="text-xl font-semibold mb-4">Quiz Results</h2>
                                    <p className="text-lg">
                                        Your score: {score} out of {questions.length}
                                    </p>

                                    <button onClick={startQuiz}
                                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Try again
                                        </span>
                                    </button>

                                    <button onClick={showEducation}
                                        className="relative m-5 inline-flex items-center justify-center p-0.5 mb-2 mt-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Learn
                                        </span>
                                    </button>

                                </div>
                            ) : (
                                <div className="quiz-container">
                                    {currentSlide < educationSlides.length ? (
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-4">{educationSlides[currentSlide].title}</h2>
                                            <p className="text-lg">{educationSlides[currentSlide].content}</p>
                                            <div className="pagination mt-4 flex justify-between">
                                                {currentSlide > 0 && (
                                                    <button onClick={prevSlide}
                                                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Previous
                                                        </span>
                                                    </button>
                                                )}
                                                <div className="flex-grow" />
                                                {currentSlide === educationSlides.length - 1 ? (


                                                    <button onClick={startQuiz}
                                                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Take Quiz
                                                        </span>
                                                    </button>
                                                ) : (

                                                    <button onClick={nextSlide}
                                                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                            Next
                                                        </span>
                                                    </button>
                                                )}
                                            </div>


                                        </div>
                                    ) : (
                                        <>
                                            {currentQuestion < questions.length ? (
                                                <div>
                                                    <h2 className="text-2xl font-semibold mb-4">Blockchain Quiz</h2>
                                                    <p className="text-lg">
                                                        Question {currentQuestion + 1} of {questions.length}
                                                    </p>
                                                    <h3 className="text-lg font-medium mt-2">
                                                        {questions[currentQuestion].question}
                                                    </h3>
                                                    <div className="options mt-4">
                                                        {questions[currentQuestion].options.map((option, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => handleAnswerClick(index)}
                                                                className={`bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800 text-white px-4 py-2 rounded-lg mb-2 w-full hover-bg-purple-600 hover:bg-purple-900 transition-all
                                                        ${selectedOption === index ? (index === questions[currentQuestion].correctAnswer ? 'bg-correct hover-bg-green-600' : 'bg-incorrect hover-bg-red-600') : ''}`}
                                                            >
                                                                {option}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <h2 className="text-2xl font-semibold mb-4">Congratulations!</h2>
                                                    <p className="text-lg mb-4">You've completed the education section.</p>
                                                    <button
                                                        onClick={startQuiz}
                                                        className="bg-purple-500 text-white px-4 py-3 rounded-lg m-4 hover-bg-purple-600 transition-all"
                                                    >
                                                        Take Quiz
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
