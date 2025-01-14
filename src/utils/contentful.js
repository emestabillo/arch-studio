import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};
const client = createContentClient();

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });
  console.log("t:", response);
  return response.items;
};

export const getProject = async () => {
  const results = await getEntriesByType("archStudio");
  const portfolioProjects = results.map((project) => project.fields);

  console.log("pp", portfolioProjects);
  return portfolioProjects;
};
