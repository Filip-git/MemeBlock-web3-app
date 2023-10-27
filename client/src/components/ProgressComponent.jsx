import React, { useEffect } from 'react';
import '../styles/scrollTop.css';
import $ from 'jquery';

const ProgressComponent = () => {
    const duration = 550; // Scroll duration in milliseconds

    const scrollToTop = () => {
        $('html, body').animate({ scrollTop: 0 }, duration);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Show the scroll-to-top button when the user scrolls down
            if ($(window).scrollTop() > 800) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        };

        $(window).on('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            <button className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center opacity-90">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            </button>
        </div>
    );
}

export default ProgressComponent;