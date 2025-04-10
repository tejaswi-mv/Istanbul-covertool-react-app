const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const PORT = 4000;

app.use(cors()); // 🔥 Enable CORS for all origins
app.use(express.json());

// POST route to receive coverage from browser
app.post("/__coverage__", (req, res) => {
  const coverageData = req.body;

  if (!coverageData) {
    return res.status(400).send("No coverage data received.");
  }

  const dir = path.join(__dirname, ".nyc_output");
  const outFile = path.join(dir, "out.json");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(outFile, JSON.stringify(coverageData, null, 2));
  console.log("✅ Coverage saved to .nyc_output/out.json");

  res.send("Coverage received");
});

// Route to generate HTML report and return success
app.get("/generate-coverage", (req, res) => {
  exec("npx nyc report --reporter=html", (err, stdout, stderr) => {
    if (err) {
      console.error("Failed to generate report:", err);
      return res.status(500).send("Failed to generate report");
    }
    console.log("✅ Coverage report generated");
    res.send("Coverage report generated");
  });
});

// Serve the coverage report
app.use("/coverage", express.static(path.join(__dirname, "coverage")));

app.listen(PORT, () => {
  console.log(`🚀 Middleware server running at http://localhost:${PORT}`);
});
