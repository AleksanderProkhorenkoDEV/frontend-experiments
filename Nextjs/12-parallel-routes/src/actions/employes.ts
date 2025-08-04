"use server";
export const getEmployers = async (): Promise<Employer[] | []> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
    next: {
      tags: ["employers-collection"],
    },
  });
  const data = await response.json();
  return data;
};
