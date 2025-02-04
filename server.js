require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/frame", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Send the frame response
  res.json({
    frame: {
      version: "vNext",
      image: "https://i.ibb.co/60h9VH1M/Virat-Kohli-Dp-Hd.jpg", 
      buttons: [
        {
          label: "Visit Website",
          action: "link",
          target: "https://en.wikipedia.org/wiki/Virat_Kohli"
        }
      ]
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
