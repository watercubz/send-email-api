import multer from "multer";
import path from "path";

// Configuracion de almacenamiento con multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:/Users/eurys/Downloads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export default upload;
