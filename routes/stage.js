const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const operatorType = require("../data/enums");

router.get("/", (req, res) => {
  data = {
    slackUsername: "Nageri.Cedric",
    age: 21,
    backend: true,
    bio: "Through this internship, I am charged and ready to climb the ladder to the mountain top! See you on the other side.",
  };
  res.status(200).json(data);
});
/**
 * @route  POST api/stage
 * @desc   POST: carry out arithmetic logic
 * @access Private
 */
router.post(
  "/",
  [
    check("operation_type", "Please include operation").not().isEmpty(),
    check("x", "Please include an integer").isNumeric(),
    check("y", "Please include an integer").isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { operation_type, x, y } = req.body;
    try {
      let answer;
      let enumValue;
      switch (operation_type) {
        case operatorType.ADDITION:
          answer = x + y;
          break;
        case operatorType.SUBTRACTION:
          answer = x - y;
          break;
        case operatorType.MULTIPLICATION:
          answer = x * y;
          break;
        default:
          return res.status(400).json({ msg: "Operation Type does not exist" });
      }
      /*
      if (operation_type === operatorType.ADDITION) {
        answer = x + y;
        enumValue = operatorType.ADDITION;
      } else if (operation_type === operatorType.SUBTRACTION) {
        answer = x - y;
        enumValue = operatorType.SUBTRACTION;
      } else if (operation_type === operatorType.MULTIPLICATION) {
        answer = x * y;
        enumValue = operatorType.MULTIPLICATION;
      } else {
        
      }*/

      res.status(200).json({
        slackUsername: "Nageri.Cedric",
        operation_type: operation_type,
        result: answer,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: err });
    }
  }
);

module.exports = router;
