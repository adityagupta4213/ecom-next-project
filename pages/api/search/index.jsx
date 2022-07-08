import Fuse from "fuse.js";
import { images } from "../../../data/images";

/**
 * Handles search queries using Fuzzy search on image "id" and "tags"
 * @param {Object} req Incoming request object
 * @param {Object} res Outgoing response object
 * @returns {Array} "responseImages" as the array of matching image objects
 */
export default function handler(req, res) {
  console.log(req.query);
  var query = req.query.q;
  var type = req.query.type;
  var responseImages = [];
  // options for Fuse fuzzy search
  const options = {
    keys: ["id", "tags"],
  };

  if (query) {
    /** if a "type" is specified, don't search the whole database
     * instead just search the filtered set
     */
    var fuse;
    console.log(typeof type);
    if (type) {
      fuse = new Fuse(
        images.filter((image) => {
          return image.type == type;
        }),
        options
      );
    } else {
      fuse = new Fuse(images, options);
    }
    // fuzzy search the query and push the results into the array
    fuse.search(query).forEach((result) => {
      responseImages.push(result.item);
    });
  } else {
    responseImages = images;
  }

  res.status(200).json(responseImages);
}
