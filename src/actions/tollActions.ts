import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const calculateToll = (route: any) => async (dispatch: any) => {
  try {
    const response = await axios.post(
      "https://dev.tollguru.com/v1/calc/route",
      route,
      {
        headers: { apikey: process.env.TOLLGURU_API_KEY },
      }
    );

    dispatch({ type: "CALCULATE_TOLL", payload: response.data });
  } catch (error) {
    console.error("Failed to calculate toll:", error);
  }
};
