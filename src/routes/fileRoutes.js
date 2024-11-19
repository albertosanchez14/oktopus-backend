const express = require("express");

const fileController = require("../controllers/fileController");

const { verifyJWT } = require("../middleware/verifyJWT");
const { upload } = require("../config/uploadOptions");

const router = express.Router();

router.use(verifyJWT);

router.route([ "/", "/home", "/folders"])
    .get(fileController.listFolderFiles)

router.route("/folders/:folderId")
    .get(fileController.listFolderFiles)
    .post(upload.any(), fileController.uploadFile);

router.route("/folders/:folderId/:fileId")
    .get(fileController.getFile);

router.route("/:fileId")
    .get(fileController.getFile)
    .delete(fileController.deleteFile);

module.exports = router;
