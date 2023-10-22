import React, { useEffect, useState } from 'react';
import '../styles/scrollTop.css';
import $ from 'jquery';
import arrow from '../assets/images/arrow.svg';

const ProgressComponent = () => {
    const duration = 550; // Scroll duration in milliseconds

    const scrollToTop = () => {
        $('html, body').animate({ scrollTop: 0 }, duration);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Show the scroll-to-top button when the user scrolls down
            if ($(window).scrollTop() > 200) {
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
            <img className="progress-circle" src={arrow} alt="Scroll to Top" />
        </div>
    );
}

export default ProgressComponent;