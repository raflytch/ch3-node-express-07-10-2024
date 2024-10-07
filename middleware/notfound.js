const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`This user try to access database ${req.url}, ${req.method}`);

  next();
});

module.exports = router;
