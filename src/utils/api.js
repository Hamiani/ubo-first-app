import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("http://api.quotable.io/random");
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
};
