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
  description?: string;
  featured?: boolean;
  order: number;
  imageSrcDesktop: ContentImageProps | null;
  imageSrcTablet: ContentImageProps | null;
  imageSrcMobile: ContentImageProps | null;
  carouselItem?: boolean;
  imageHeroDesktop?: ContentImageProps | null;
  imageHeroTablet?: ContentImageProps | null;
  imageHeroMobile?: ContentImageProps | null;
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
    description: projectEntry.fields.description || "",
    featured: projectEntry.fields.featured || false,
    order: projectEntry.fields.order || 0,
    imageSrcDesktop: parseContentfulContentImage(
      projectEntry.fields.imageSrcDesktop
    ),
    imageSrcTablet: parseContentfulContentImage(
      projectEntry.fields.imageSrcTablet
    ),
    imageSrcMobile: parseContentfulContentImage(
      projectEntry.fields.imageSrcMobile
    ),
    carouselItem: projectEntry.fields.carouselItem || false,
    imageHeroDesktop: parseContentfulContentImage(
      projectEntry.fields.imageHeroDesktop
    ),
    imageHeroTablet: parseContentfulContentImage(
      projectEntry.fields.imageHeroTablet
    ),
    imageHeroMobile: parseContentfulContentImage(
      projectEntry.fields.imageHeroMobile
    ),
  };
}

export async function fetchProjects(): Promise<ProjectProps[]> {
  try {
    const contentful = contentfulClient({ preview: false });

    const allProjectsResult = await contentful.getEntries<TypeProjectSkeleton>({
      content_type: "archStudio",
    });

    const allProjects = allProjectsResult.items.map(
      (projectEntry) => parseContentfulProject(projectEntry) as ProjectProps
    );
    const sortedProjects = allProjects.sort((a, b) => b.order - a.order);
    return sortedProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
