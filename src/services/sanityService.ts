import { sanityClient } from '../sanityClient';

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  excerpt: string;
  body: any[];
  language?: string; // If we want to support tr/en in Sanity
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    excerpt
  }`;
  
  return sanityClient.fetch(query);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    body,
    excerpt
  }`;
  
  return sanityClient.fetch(query, { slug });
}
