import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CatalogItem from "../../components/CatalogItem";

export default function Catalog() {
  // state for keeping track of fetched images
  const [images, setImages] = useState([]);
  const router = useRouter();

  /**
   *  Fetches images from the API and updates the state
   */
  const fetchImages = async () => {
    const response = await fetch(
      "/api/images?" +
        new URLSearchParams({
          type: router.query.type,
        })
    );
    const data = await response.json();
    // update state
    setImages(data);
  };
  
  // fetch images on every page route change
  useEffect(() => {
    fetchImages();
  }, [router.query.type]);

  return (
    <div>
      {/* map fetched images to components */}
      {images.map((image) => {
        return <CatalogItem key={image.id} id={image.id} path={image.path} />;
      })}
    </div>
  );
}
