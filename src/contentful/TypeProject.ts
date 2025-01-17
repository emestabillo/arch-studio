import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectFields {
  propertyName: EntryFieldTypes.Symbol;
  dateBuilt: EntryFieldTypes.Symbol;
  imageSrcDesktop: EntryFieldTypes.AssetLink;
  imageSrcTablet: EntryFieldTypes.AssetLink;
  imageSrcMobile: EntryFieldTypes.AssetLink;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "archStudio"
>;

export type TypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
