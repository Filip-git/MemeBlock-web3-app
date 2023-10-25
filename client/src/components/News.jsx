import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const News = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [newsData, setNewsData] = useState([]);
    const [page, setPage] = useState(1);
    const batchSize = 1;
    const apiKey = import.meta.env.VITE_NEWS_API;

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://api.marketaux.com/v1/news/all?language=en&page=${page}`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });

            const newArticles = response.data.data.filter((article) => {
                return (
                    article.title &&
                    article.description &&
                    article.language === 'en' &&
                    article.image_url
                );
            });

            if (newArticles.length === 0) {
                // No more articles to load
                setPage(-1);
            } else {
                if (page === 1) {
                    // For the first batch, set newsData directly
                    setNewsData(newArticles);
                } else {
                    // For subsequent batches, concatenate new data
                    setNewsData((prevNewsData) => [...prevNewsData, ...newArticles]);
                }
            }
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    useEffect(() => {
        if (page > 0) {
            fetchNews();
        }
    }, [page]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="flex flex-col items-center gradient-bg-education">
            <div id="news" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {newsData.map((article) => (
                    <div
                        key={article.uuid}
                        className="bg-white rounded-lg p-4 cursor-pointer"
                        onClick={() => window.open(article.url, '_blank')}
                        data-aos="fade-up"
                    >
                        <h2 className="text-lg font-semibold">{article.title}</h2>
                        <img src={article.image_url} alt="Article" className="w-full h-auto mt-2" />
                        <p className="mt-2">{article.description}</p>
                    </div>
                ))}
            </div>
            {page > 0 && (
                <div className="mt-4">
                    <button
                        onClick={loadMore}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Load More
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default News;
