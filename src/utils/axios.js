// Import: Dependencies
import axios from "axios";

// Referencing .env parameters
const apiUrl = process.env.REACT_APP_URL;
const apiService = process.env.REACT_APP_SERVICE;
const apiVersion = process.env.REACT_APP_API_VERSION;
const apiActual = process.env.REACT_APP_API;

// GET: Lorenzo Token
export const lorenzoToken = axios.create({
  baseURL: `${apiUrl}/${apiService}/${apiVersion}/${apiActual}`,
});
