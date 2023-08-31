import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.json());

export default app;
