import User from "../models/model.user.js";

export const uploadImg = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const newImage = {
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
    };
    user.image.push(newImage);
    await user.save();
    res.status(200).json(newImage);
  } catch (error) {
    res.status(500).json({ meessage: "Error uploading image", error });
  }
};
