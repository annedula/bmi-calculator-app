const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/bmi-calculator", (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res.status(400).json({ error: "Missing input" });
  }

  const bmi = weight / (height * height);
  const roundedBMI = parseFloat(bmi.toFixed(1));

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal";
  } else if (bmi < 29.0) {
    category = "Overweight";
  } else if (bmi < 40.0) {
    category = "Obese";
  } else {
    category = "Extreme Obese";
  }

  res.json({
    bmi: roundedBMI,
    category: category,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
