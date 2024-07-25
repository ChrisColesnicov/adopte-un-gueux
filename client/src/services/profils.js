import axios from "axios";

export default function getProfil() {
  return axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA4xpUGwcmkHVdipg9Ah63dQqTeOO1d9aawVzva6uutf-5yQolzzoYo4uNmKMdJk9f97trC7IMcZGN/pub?output=csv"
    )
    .then((response) => response)
    .catch((error) => console.error(error));
}
