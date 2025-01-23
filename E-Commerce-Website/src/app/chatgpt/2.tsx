import { GetStaticPaths, GetStaticProps } from 'next';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source: any) => builder.image(source);

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

type Props = {
  product: Product | null;
};

const ProductPage = ({ product }: Props) => {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{product.title}</h1>
      <img
        src={urlFor(product.imageUrl).width(400).url()}
        alt={product.title}
        width={400}
      />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products: { _id: string }[] = await sanityClient.fetch(
    `*[_type == "product"] { _id }`
  );

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const product = await sanityClient.fetch(
    `*[_type == "product" && _id == $id][0] {
      _id,
      title,
      description,
      price,
      "imageUrl": image.asset->url
    }`,
    { id }
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 60,
  };
};

export default ProductPage;
