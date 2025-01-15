import {
  createClient,
  Entry,
  EntryCollection,
  EntrySkeletonType,
} from "contentful";

// Define the actual fields of your content model
interface Asset {
  fields: {
    file: {
      url: string;
    };
  };
}

interface ImageField {
  fields: {
    file: {
      url: string;
    };
  };
}

interface Project {
  propertyName: string | undefined;
  dateBuilt: string | undefined;
  imageSrcDesktop: ImageField;
  imageSrcTablet: ImageField;
  imageSrcMobile: ImageField;
  featured?: boolean;
}

interface ProjectFields extends EntrySkeletonType {
  fields: {
    propertyName: string;
    dateBuilt: string;
    imageSrcDesktop: Asset;
    imageSrcTablet: Asset;
    imageSrcMobile: Asset;
    featured?: boolean;
  };
}

type ContentType = "archStudio";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
};

const client = createContentClient();

export const getEntriesByType = async (
  type: ContentType
): Promise<Entry<ProjectFields>[]> => {
  const response: EntryCollection<ProjectFields> = await client.getEntries({
    content_type: type,
  });
  console.log(response);
  return response.items;
};

export const getProject = async (): Promise<Project[]> => {
  const results = await getEntriesByType("archStudio");
  const portfolioProjects =
    results?.map((project): Project => {
      const fields = project.fields;
      return {
        propertyName: fields.propertyName,
        dateBuilt: fields.dateBuilt,
        imageSrcDesktop: {
          fields: {
            file: {
              url: fields.imageSrcDesktop?.fields?.file?.url ?? "",
            },
          },
        },
        imageSrcTablet: {
          fields: {
            file: {
              url: fields.imageSrcTablet?.fields?.file?.url ?? "",
            },
          },
        },
        imageSrcMobile: {
          fields: {
            file: {
              url: fields.imageSrcMobile?.fields?.file?.url ?? "",
            },
          },
        },
        featured: fields.featured ?? false,
      };
    }) ?? [];

  return portfolioProjects;
};
