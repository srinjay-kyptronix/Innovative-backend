const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    file_name: {
      type: String,
      required: true,
    },
    pdf_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FileModel = mongoose.model("FileModel", fileSchema);

module.exports = FileModel;
