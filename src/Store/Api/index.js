import axios from "axios";

/**
 * Axios Instance
 */
const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Survey API
 */

const URI = {
  SURVEY: "/survey",
};

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
