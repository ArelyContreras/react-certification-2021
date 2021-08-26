import axios from 'axios';

const testBaseUrl = 'https://api.backend.dev/youtube/v3';
const youtubeBaseUrl = 'https://content-youtube.googleapis.com/youtube/v3';

const baseUrl = process.env.NODE_ENV === 'test' ? testBaseUrl : youtubeBaseUrl;
console.log(baseUrl);
const axiosClient = axios.create({
    baseURL: baseUrl
    // baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default axiosClient;
