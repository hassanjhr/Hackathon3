// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }




// import createImageUrlBuilder from '@sanity/image-url';
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';
// import { client } from './client'; // Import the Sanity client

// const builder = createImageUrlBuilder(client);

// export const urlForImage = (source: SanityImageSource) => {
//   return builder.image(source);
// };



import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env'; // Assuming these are correctly set

// Sanity Image URL Builder
const builder = createImageUrlBuilder({ projectId, dataset });

// Helper to generate image URL
export const urlForImage = (source: SanityImageSource) => {
  return builder.image(source); // This will generate a proper image URL
};
