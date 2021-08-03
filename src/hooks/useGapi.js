import { useEffect, useState } from "react";
import {gapiClient, buildQueryParams} from '../helpers/helpers'
const KEY = process.env.REACT_APP_YT_KEY;

const useGapi = () => {
    const [videos, setVideos] = useState(null);
    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchVideos = async (query) => {
        setLoading(true);
        try {
            const queryParams = buildQueryParams({
                part: query.details,
                maxResults: query.maxResults,
                q: query.search,
                regionCode: 'MX',
                type: 'video',
                videoDefinition: 'high'
            });

            const response = await gapiClient(`/search?${queryParams}&key=${KEY}`);
            setVideos(response.data.items);
        }
        catch(err){
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }
    const fetchVideoDetails = async (query) => {
        setLoading(true);
        try {
            const queryParams = buildQueryParams({
                part: query.details,
                id: query.id,
                regionCode: 'MX',
                videoDefinition: 'high'
            });
            const response = await gapiClient(`/videos?${queryParams}&key=${KEY}`);
            // console.log(response.data.items[0]);
            setVideoDetails(response.data.items[0]);
        }
        catch(err){
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }
    const fetchRelatedVideos = async (query) => {
        setLoading(true);
        try {
            const queryParams = buildQueryParams({
                part: query.details,
                maxResults: query.maxResults,
                relatedToVideoId: query.id,
                regionCode: 'MX',
                type: 'video',
                videoDefinition: 'high'
            });

            const response = await gapiClient(`/search?${queryParams}&key=${KEY}`);
            // console.log(response.data.items)
            setRelatedVideos(response.data.items);
        }
        catch(err){
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchVideoDetails();
        fetchVideos();
        fetchRelatedVideos();
    }, [])

    return {
        videos,
        videoDetails,
        relatedVideos,
        loading,
        error,
        fetchVideos,
        fetchVideoDetails,
        fetchRelatedVideos
    };
}

export default useGapi;