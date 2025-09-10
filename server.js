import express from "express";

const app = express();
const PORT = 4000;

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile("/host.html", { root: "." });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
