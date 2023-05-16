const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;

var cors = require("cors");

app.use(cors());

app.get("/api/cats", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const catImages = response.data;
    res.json(catImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
