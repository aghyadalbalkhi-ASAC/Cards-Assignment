import axios from 'axios';
import baseUrl from './baseUrl';
// import cardsData from './cardsData'


export async function getPostsInfo ()  {
    const url = `${baseUrl}`;
    const req = await axios.get(url);
    const postsData =req.data;
    return postsData;

}

export async function getSpecificPosts (id)  {
    const url = `${baseUrl}/${id}`;
    const req = await axios.get(url);
    const postData =req.data;
    return postData;

}