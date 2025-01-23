import { GetStaticProps } from 'next';
import Link from 'next/link';
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
});

type Product = {
  _id: string;
  title: string;
};

type Props = {
  products: Product[];
};

const HomePage = ({ products }: Props) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link href={`/product/${product._id}`}>
              <a>{product.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await sanityClient.fetch(
    `*[_type == "product"] { _id, title }`
  );

  return {
    props: { products },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default HomePage;
