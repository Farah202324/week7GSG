const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().alphanum().min(6).required(),
});

module.exports = { loginSchema };
