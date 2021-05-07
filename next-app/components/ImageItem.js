import Link from "next/link";
import imageStyles from "../styles/image.module.css";

const ImageItem = ({ image }) => {
  return (
    <div>
      <Link href="/image/[id]" as={`/image/${image.id}`}>
        <a>
          {" "}
          <img src={image.url} alt={image.title} />
        </a>
      </Link>
    </div>
  );
};

export default ImageItem;
