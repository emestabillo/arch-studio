import { TypeProjectSkeleton } from "./TypeProject";
import { Entry } from "contentful";
import {
  ContentImageProps,
  parseContentfulContentImage,
} from "./contentfulImage";
import contentfulClient from "./contentfulClient";

type ProjectEntry = Entry<TypeProjectSkeleton, undefined, string>;

export interface ProjectProps {
  propertyName: string;
  dateBuilt: string;
  imageSrcDesktop: ContentImageProps | null;
  imageSrcTablet: ContentImageProps | null;
  imageSrcMobile: ContentImageProps | null;
}

export function parseContentfulProject(
  projectEntry?: ProjectEntry
): ProjectProps | null {
  if (!projectEntry) {
    return null;
  }

  return {
    propertyName: projectEntry.fields.propertyName || "",
    dateBuilt: projectEntry.fields.dateBuilt || "",
    imageSrcDesktop: parseContentfulContentImage(
      projectEntry.fields.imageSrcDesktop
    ),
    imageSrcTablet: parseContentfulContentImage(
      projectEntry.fields.imageSrcTablet
    ),
    imageSrcMobile: parseContentfulContentImage(
      projectEntry.fields.imageSrcMobile
    ),
  };
}

// interface FetchProjectsOptions {
//   preview: boolean;
// }

export async function fetchProjects(): Promise<ProjectProps[]> {
  const contentful = contentfulClient({ preview: false });

  const allProjectsResult = await contentful.getEntries<TypeProjectSkeleton>({
    content_type: "archStudio",
  });
  console.log("All results:", allProjectsResult);
  return allProjectsResult.items.map(
    (projectEntry) => parseContentfulProject(projectEntry) as ProjectProps
  );
}

// interface FetchBlogPostOptions {
//   slug: string;
//   preview: boolean;
// }
// export async function fetchBlogPost({
//   slug,
//   preview,
// }: FetchBlogPostOptions): Promise<BlogPost | null> {
//   const contentful = contentfulClient({ preview });

//   const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
//     content_type: "blogPost",
//     "fields.slug": slug,
//     include: 2,
//   });

//   return parseContentfulBlogPost(blogPostsResult.items[0]);
// }
