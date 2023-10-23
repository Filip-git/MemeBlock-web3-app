import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Market = () => {
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [numToShow, setNumToShow] = useState(9);
    const [noCoinsFound, setNoCoinsFound] = useState(false);


    useEffect(() => {
        Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response) => {
            setListOfCoins(response.data.coins);
            //   console.log('Fetched Data:', response.data.coins);
        });
    }, []);

    const filteredCoins = listOfCoins
        .filter((coin) => coin.name.toLowerCase().includes(searchWord.toLowerCase()))
        .slice(0, numToShow);

    function Coin({ data }) {
        const { name, icon, price, symbol, websiteUrl, rank, priceChange1d
            , marketCap } = data;


        const handleClick = () => {
            if (websiteUrl) {
                window.open(websiteUrl, '_blank');
            }
        };

        const formatMarketCap = (cap) => {
            if (cap >= 1e9) {
                return (cap / 1e9).toFixed(2) + 'B';
            } else if (cap >= 1e6) {
                return (cap / 1e6).toFixed(2) + 'M';
            }
            return cap.toFixed(2);
        };

        return (
            <div className="coin bg-[#000000e6] text-white border border-purple-500 p-4 rounded-md shadow-md" >
                <div className="flex items-center">
                    <img src={icon} alt={`${name} Icon`} className="h-16 w-16 cursor-pointer" onClick={handleClick} />
                    <div className="ml-4">
                        <h1 className="text-xl font-semibold cursor-pointer" onClick={handleClick} >{name} ({symbol})</h1>
                        <div className="flex items-center mt-2">
                            <div className="text-lg mr-4">
                                Rank: {rank}
                            </div>
                            <div className={`text-lg mr-4 ${priceChange1d
                                ? (priceChange1d
                                    > 0 ? 'text-green-600' : 'text-red-600') : ''}`}>
                                1d Change: {priceChange1d ? priceChange1d.toFixed(2) + '%' : 'N/A'}
                            </div>
                            <div className="text-lg">
                                Market Cap: ${formatMarketCap(marketCap)}
                            </div>
                        </div>
                        <div className="text-xl mt-2">
                            Price: <span className="text-2xl text-black-600">{price ? `$${price.toFixed(2)}` : 'N/A'}</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    const showMoreCoins = () => {
        setNumToShow((prev) => prev + 9);
    };

    return (
        <div className="market p-4 bg-black">            <div className=" p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search any Top 100 cryptocurrency..."
                    className="bg-[#000000] border p-3 rounded-md w-full focus:ring focus:ring-purple-400 focus:outline-none text-gray-600"
                    onChange={(event) => {
                        setSearchWord(event.target.value);
                        setNoCoinsFound(false);
                    }}
                />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredCoins.length > 0 ? (
                    filteredCoins.map((coin) => (
                        <Coin
                            key={coin.id}
                            data={coin}
                        />
                    ))
                ) : (
                    <div className="text-red-500 text-center mt-4">
                        Unfortunately, the cryptocurrency isn't in the top 100 at the moment.
                    </div>
                )}
            </div>

            {numToShow < listOfCoins.length && (
                <div className="flex justify-center">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" onClick={showMoreCoins}>
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Get more coins
                        </span>
                    </button>
                </div>
            )}
        </div>
        </div>
    );

}
export default Market;