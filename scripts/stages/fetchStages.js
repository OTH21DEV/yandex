import { fetchData } from "../fetchData.js"

export async function fetchStages(){
 return await fetchData("../../data/stages.json")
}
