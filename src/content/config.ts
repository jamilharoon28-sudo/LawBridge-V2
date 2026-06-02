import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string()
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string()
  })
});

const webinars = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date()
  })
});

const workshops = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date()
  })
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string()
  })
});

export const collections = {
  pages,
  blog,
  webinars,
  workshops,
  resources
};
