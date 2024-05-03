//template
async function fetchBox(id: string) {
  const response = await fetch(`/api/box/${id}`);
  // if (!response.ok) {
  //   throw new Error('Failed to fetch box');
  // }
  // return JSON.parse(JSON.stringify(response.json())) as Promise<Box>;
  if (!response.ok) {
    throw new Error('Failed to fetch id');
  }
  if (response.ok) {
    return response.json();
  }
}

export { fetchBox };
