import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

// Create and export the Sanity client
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you are using static site generation or ISR
});
