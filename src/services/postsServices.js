import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-breakingnews-dvti.onrender.com";
/* const baseURL = "http://localhost:3001"; */

export function getAllPosts() {
  const response = axios.get(`${baseURL}/posts`); 
  return response;
}

export function getTopPost() {
  const response = axios.get(`${baseURL}/posts/top`); 
  return response;
}

export function searchPosts(title) {
  const response = axios.get(`${baseURL}/posts/search?title=${title}`);
  return response;
}

export function getAllPostsByUser() {
  const response = axios.get(`${baseURL}/posts/byUserID` , {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
  });
  return response;
}
