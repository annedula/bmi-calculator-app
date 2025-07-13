export default function handler(req, res) {
  if (req.method === "POST") {
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
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    return res.status(200).json({ bmi: roundedBMI, category });
  }

  res.status(405).json({ error: "Method not allowed" });
}
