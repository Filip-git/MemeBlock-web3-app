import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;
const DEFAULT_GIF_URL = "https://media3.giphy.com/media/hPPx8yk3Bmqys/giphy.gif?cid=ecf05e476p4kckztbx02ljvnabgsj345f5ws17ldmxf68gg0&ep=v1_gifs_search&rid=giphy.gif&ct=g";

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState(DEFAULT_GIF_URL);

    const fetchGifs = async () => {
        try {
            if (keyword) {
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
                const { data } = await response.json();

                if (data && data.length > 0) {
                    setGifUrl(data[0]?.images?.downsized_medium.url);
                } else {
                    setGifUrl(DEFAULT_GIF_URL);
                }
            } else {
                setGifUrl(DEFAULT_GIF_URL);
            }
        } catch (error) {
            console.error("Error fetching GIFs:", error);
            setGifUrl(DEFAULT_GIF_URL);
        }
    };

    useEffect(() => {
        fetchGifs();
    }, [keyword]);

    return gifUrl;
};

export default useFetch;
