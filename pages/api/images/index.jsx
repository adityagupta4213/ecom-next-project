import { images } from "../../../data/images";

/**
 * Handles fetching images based on image "type" or "id"
 * @param {Object} req Incoming request object
 * @param {Object} res Outgoing response object
 * @returns {Array} "responseImages" as the array of matching image objects
 */
export default function handler(req, res) {
  // Handle the request based on params
  var responseImages = [];
  // If a "type" param is specified
  if (req.query.type) {
    responseImages = images.filter((image) => {
      return image.type == req.query.type;
    });
  }
  // If an "id" param is specified
  if (req.query.id) {
    responseImages = images.filter((image) => {
      return image.id == req.query.id;
    });
  }
  // If nothing is specified
  else {
    responseImages = images;
  }
  res.status(200).json(responseImages);
}
