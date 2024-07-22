export async function fetchData(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`error status : ${response.status}`);
  }
  return await response.json();
}
