import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CatalogItem from "../../components/CatalogItem";

export default function Catalog() {
  // state for keeping track of fetched images
  const [images, setImages] = useState([]);
  const router = useRouter();
  // parameter string for the API, include the image "type" if specified in the route
  const paramString = "/api/images?" + router.query.type || undefined;

  /**
   *  Fetches images from the API and updates the state
   */
  const fetchImages = async () => {
    const response = await fetch(paramString);
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
