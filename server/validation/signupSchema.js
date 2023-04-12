const Joi = require("joi");
const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});

module.exports = { signupSchema };
