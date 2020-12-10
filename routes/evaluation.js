const express = require('express');
const router = express.Router();
const Evaluation = require('../models/Evaluation');

//User Register Route
router.post('/', async (req, res) => {
  // Creating a new user
  const evaluation = new Evaluation({
    fileName: req.body.fileName,
    charCount: req.body.charCount,
  });
  try {
    await evaluation.save();
    res.status(200).json(evaluation);
  } catch (e) {
    res
      .status(400)
      .json({ error: 'You must provide data to create a table entry' });
  }
});

router.get('/', async (req, res) => {
  try {
    const evaluationData = await Evaluation.find({});
    res.send({ evaluationData });
  } catch (e) {
    res
      .status(400)
      .json({ error: 'You must provide data to create a table entry' });
  }
});

module.exports = router;
