export function generateSEOMetadata(data) {
  const {
    title,
    description,
    image = "/image/logo.png",
    url,
    type = "website",
    publishedTime,
    author,
    tags = [],
  } = data;

  return {
    title,
    description,
    keywords: tags,
    authors: author ? [{ name: author }] : undefined,
    image: image,
    openGraph: {
      title,
      description,
      type,
      url,
      publishedTime,
      authors: author ? [author] : undefined,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: url
      ? {
          canonical: url,
        }
      : undefined,
  };
}
