import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'yourProjectId',
  dataset: 'yourDataset',
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;