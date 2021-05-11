import Link from "next/link";
import { useRouter } from "next/router";
const Image = ({ image }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2>{image.title}</h2>
      <img src={image.url} alt="" width="300" />
      <Link href="/">Go back</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  );
  const image = await res.json();

  return {
    props: {
      image,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/`);
  const images = await res.json();
  const ids = images.map((image) => image.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default Image;
