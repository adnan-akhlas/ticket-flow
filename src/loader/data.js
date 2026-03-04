export async function getData(url) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(url);
  return response.json();
}
