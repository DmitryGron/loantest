import express from "express";
import decision from "./decision";

const API = express();

API.use(decision);


export default API;
