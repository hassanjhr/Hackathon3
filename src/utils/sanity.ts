// import sanityClient from '@sanity/client';

// const client = sanityClient({
//   projectId: 'yourProjectId',
//   dataset: 'yourDataset',
//   useCdn: true, // `false` if you want to ensure fresh data
// });

// export default client;


// import { createClient } from "@sanity/client";

// const client = createClient({
//   projectId: "yourProjectId", // Replace with your actual Sanity project ID
//   dataset: "yourDataset", // Replace with your dataset name (e.g., "production")
//   apiVersion: "2023-01-01", // Replace with the appropriate version date
//   useCdn: true, // Set to `false` for fresh data during development
// });

// export default client;


// import { createClient } from "@sanity/client";

// const client = createClient({
//   projectId: "yourProjectId", // Replace with your actual Sanity project ID
//   dataset: "yourDataset", // Replace with your dataset name (e.g., "production")
//   apiVersion: "2023-01-01", // Replace with the appropriate version date
//   useCdn: true, // Set to `false` for fresh data during development
// });

// export { client };

// utils/sanity.ts

// import { createClient } from 'next-sanity';

// export const client = createClient({
//   projectId: 'yourProjectId', // Replace with your actual project ID
//   dataset: 'yourDataset',     // Replace with your actual dataset name
//   apiVersion: '2023-01-01',   // Use the current date or a specific API version
//   useCdn: true,               // Set to false if you need the freshest data
// });



// import { createClient } from 'next-sanity';

// const client = createClient({
//   projectId: 'yourActualProjectId', // Replace with your actual project ID
//   dataset: 'yourActualDataset',     // Replace with your actual dataset name
//   apiVersion: '2023-01-01',         // Use the current date or a specific API version
//   useCdn: true,                     // Set to false if you need the freshest data
// });

// export default client;

// import sanityClient from '@sanity/client';

// const client = sanityClient({
//   projectId: 'yourActualProjectId', // Replace with your actual project ID
//   dataset: 'yourActualDataset', // Replace with your actual dataset
//   useCdn: true, // `false` if you want to ensure fresh data
//   apiVersion: '2023-01-01', // Use a specific API version
// });

// export default client;


import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
  apiVersion: '2023-01-01', 
  useCdn: process.env.NODE_ENV === 'production', 
  token: "sk3NmMYRBsY5Tisbb7pFTxQKXDpHgw12ebembPx7aL1j0juEQsdvZaPjePCDXXhYgbRuNsh08Ankg4nBoW7wJfdpmXD23AMQ3hkwNhKLBhbw30AVQIPJnWGdf1m13cozPA3965p6csbOxRvY6ezPzrYS7jiDJY1hAo4GQvENT9vKgY2CYUXC", 
});


