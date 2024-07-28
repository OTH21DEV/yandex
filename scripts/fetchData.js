/**
 * Fetches mock data from the given file path (JSON format).
 * @param {string} filePath The path of mock data (json)
 * @returns {Promise<Object>} A promise that resolves to the parsed JSON object.
 * @throws Will throw an error if the fetch operation fails.
 */
export async function fetchData(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`error status : ${response.status}`);
  }
  return await response.json();
}
