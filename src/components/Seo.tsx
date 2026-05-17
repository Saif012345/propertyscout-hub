import { Helmet } from "react-helmet-async";

const SITE = "https://unooma.lovable.app";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const Seo = ({ title, description, path, image }: SeoProps) => {
  const url = `${SITE}${path}`;
  const ogImage = image ?? `${SITE}/logo.png`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default Seo;