import axios from "axios";
import Cookies from "universal-cookie";

console.log("damn");

const _token = new Cookies().get("_token");

/**
 * Axios Instance
 */
const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API + "/api",
  headers: {
    Authorization: `bearer ${_token}`,
    "Content-Type": "application/json",
  },
});

const auth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Survey API
 */

const URI = {
  SURVEY: "/survey",
  AUTH: "/auth",
};

export function signUp(payload) {
  return auth.post(`${URI.AUTH}/signup`, payload);
}

export function login(payload) {
  return auth.post(`${URI.AUTH}/login`, payload);
}

export function fetchUser(payload) {
  return client.post(`${URI.AUTH}/user`, payload);
}

export function fetchSurvey() {
  return client.get(URI.SURVEY);
}

export function storeSurvey(payload) {
  return client.post(URI.SURVEY, payload);
}

export function editSurvey(payload) {
  return client.get(`${URI.SURVEY}/${payload}`);
}

export function updateSurvey(payload) {
  return client.post(`${URI.SURVEY}/update`, payload);
}

export function deleteSurvey(payload) {
  return client.delete(`${URI.SURVEY}/${payload}`);
}

export function processingImage(payload) {
  return client.post(`${URI.SURVEY}/upload-image`, payload);
}
