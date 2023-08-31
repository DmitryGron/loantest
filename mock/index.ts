import api from "./api";
import app from "./app";

const PORT = 3001;

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Mocks are running on port ${PORT}`);
});
