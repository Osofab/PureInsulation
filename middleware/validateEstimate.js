// middleware/validateEstimate.js
const Joi = require('joi');

const validateEstimate = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    address: Joi.string().required(),
    phone: Joi.string().min(10).required(),
    preferredDate: Joi.date().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateEstimate;