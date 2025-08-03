"use server";
export const getEmployers = async (): Promise<Employer[] | []> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};
