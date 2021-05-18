/* eslint-disable linebreak-style */
const {db} = require('../config/firebase');
module.exports.addEntry = async (req, res) => {
  const {title, text} = req.body;
  try {
    const entry = db.collection('entries').doc();
    const entryObject = {
      id: entry.id,
      title,
      text,
    };

    entry.set(entryObject);

    res.status(200).send({
      status: 'success',
      message: 'entry added successfully',
      data: entryObject,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
