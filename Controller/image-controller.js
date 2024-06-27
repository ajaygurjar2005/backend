const Image = require('../Model/image');

const uploadImage = async (req, res) => {
  const { filename, originalname, path } = req.file;

  try {
    const newImage = new Image({
      filename,
      originalname,
      path,
    });

    const savedImage = await newImage.save();

    const imageUrl = `http://localhost:${PORT}/uploads/${filename}`;
    res.status(201).json({ message: 'Image uploaded successfully', imageUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getImage = async (req, res) => {
  try {
    const filename = req.params.filename;
    const image = await Image.findOne({ filename });

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const imagePath = path.join(__dirname, '..', 'uploads', filename);

    res.setHeader('Content-Type', 'image/jpeg');
    res.sendFile(imagePath);
  } catch (error) {
    console.error('Error fetching image:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { uploadImage, getImage };
