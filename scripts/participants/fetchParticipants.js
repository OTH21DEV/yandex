import { fetchData } from "../fetchData.js";
import { BASE_URL } from "../../config.js";

export async function fetchParticipants(){
  // return await fetchData("../../data/participants.json")
  return await fetchData(`${BASE_URL/data/participants.json}`)
}
