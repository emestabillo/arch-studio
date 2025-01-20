import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeContentfulProjectFields {
  propertyName: EntryFieldTypes.Symbol;
  dateBuilt: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Symbol;
  featured?: EntryFieldTypes.Boolean;
  order: EntryFieldTypes.Number;
  imageSrcDesktop: EntryFieldTypes.AssetLink;
  imageSrcTablet: EntryFieldTypes.AssetLink;
  imageSrcMobile: EntryFieldTypes.AssetLink;
  carouselItem?: EntryFieldTypes.Boolean;
  imageHeroDesktop: EntryFieldTypes.AssetLink;
  imageHeroTablet: EntryFieldTypes.AssetLink;
  imageHeroMobile: EntryFieldTypes.AssetLink;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeContentfulProjectFields,
  "archStudio"
>;

export type TypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
