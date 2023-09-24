import axios from "axios";

export async function fetchRecipeData(props) {
  return new Promise((resolve, reject) => {
    const apiUrl =
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=54b0771ab02f4fd7adff309004658b57" +
      props;
    axios.get(apiUrl).then((response) => {
      if (response) {
        resolve(response.data);
      } else {
        reject(response.data.error);
      }
    });
  });
}
