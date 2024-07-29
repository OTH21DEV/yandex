// import { fetchData } from "../fetchData.js";

// export async function fetchParticipants(){
//   return await fetchData("../../data/participants.json")
// }
import { fetchData } from "./scripts/fetchData.js";

export async function fetchParticipants(){
  return await fetchData("./data/participants.json")
}