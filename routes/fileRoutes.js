const express = require("express");
const multer = require("multer");
const {
  saveFileDetails,
  getAllFiles,
  convertFiles
} = require("../controllers/fileController");


const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), saveFileDetails);
router.get("/", getAllFiles);
router.post("/convert",upload.single("file"),convertFiles);

module.exports = router;
