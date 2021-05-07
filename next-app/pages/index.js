import Head from "next/head";
import ImageList from "../components/ImageList";
export default function Home({ images }) {
  return (
    <div>
      <Head>
        <title>Welcome to Awesomeness</title>
      </Head>
      <ImageList images={images} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=10`
  );
  const images = await res.json();

  return {
    props: {
      images,
    },
  };
};
