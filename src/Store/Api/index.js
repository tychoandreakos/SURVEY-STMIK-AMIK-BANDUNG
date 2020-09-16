import axios from "axios";

/**
 * Axios Instance
 */
const client = axios.create({
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
  AUTH: "/survey/auth",
};

export function signUp(payload) {
  return client.get(`${URI.AUTH}/signup`, payload);
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
