export const getColors = async () => {
  const rest = await fetch('http://localhost:3000/api/v1/colors');
  return await rest.json();
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
