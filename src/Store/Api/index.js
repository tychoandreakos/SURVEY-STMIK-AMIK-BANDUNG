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
export function fetchSurvey() {
  return client.get("/survey");
}
