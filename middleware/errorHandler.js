const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the full stack trace for debugging
  res.status(500).json({ message: err.message || 'Internal Server Error' });
};

module.exports = errorHandler;