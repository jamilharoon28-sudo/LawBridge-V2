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

const mentors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    organisation: z.string().optional()
  })
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string().optional()
  })
});

const settings = defineCollection({
  type: "content",
  schema: z.object({
    siteName: z.string().optional(),
    tagline: z.string().optional(),
    contactEmail: z.string().optional(),
    copyright: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string()
      })
    ).optional()
  })
});

export const collections = {
  pages,
  blog,
  webinars,
  workshops,
  resources,
  mentors,
  testimonials,
  settings
};
