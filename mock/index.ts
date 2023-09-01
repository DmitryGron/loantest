import api from "./api";
import app from "./app";

const PORT = 3001;

app.use("/api", api);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Mocks are running on port ${PORT}`);
});
