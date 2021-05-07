import imageStyles from "../styles/image.module.css";
import ImageItem from "../components/ImageItem";

const ImageList = ({ images }) => {
  return (
    <div className={imageStyles.grid}>
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
