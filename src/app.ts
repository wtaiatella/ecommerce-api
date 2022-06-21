import "dotenv/config";

import express from "express";
import { Request, Response } from "express";
import { find } from "@src/services/categoryService";

console.log(process.env.AWARI);
const app = express();

app.get("/categories", async (req: Request, res: Response) => {
  const categories = await find();
  res.json(categories);
});

export default app;
