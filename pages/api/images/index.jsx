import { images } from "../../../data/images";

export default function handler(req, res) {
  // if no "type" is specified, return all images; else filter
  var responseImages =
    req.query.type == "undefined"
      ? images
      : images.filter((image) => {
          return image.type == req.query.type;
        });
  res.status(200).json(responseImages);
}
