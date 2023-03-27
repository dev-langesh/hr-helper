const multer = require("multer");
const path = require("path");

const uploadPath = path.join(__dirname, "..", "uploads");

// storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
}).single("resume");

module.exports = { uploadResume: upload };
