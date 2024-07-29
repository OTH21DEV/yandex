import { fetchData } from "../fetchData.js"
import { BASE_URL } from "../../config.js"

export async function fetchStages(){
//  return await fetchData("../../data/stages.json")
return await fetchData(`${BASE_URL}/data/stages.json`)
}
