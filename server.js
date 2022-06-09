const app = require("./app");
const db = require("./db");
const PORT = 3000;
db.on("error", console.error.bind(console, "Connection Error With MongoDB =>"));

app.listen(PORT, () => console.log(`Listening On Port ${PORT}`));
