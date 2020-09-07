import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

/**
 * Axios Instance
 */
const client = axios.create({
  baseURL: API_BASE_URL,
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

export function deleteSurvey(payload) {
  return client.delete(URI.SURVEY, {
    id: payload,
  });
}
