import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Your Project Title',

  projectId: 'yourActualProjectId', // Replace with your actual project ID
  dataset: 'yourActualDataset', // Replace with your actual dataset

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [], // Add your schema types here
  },
})