import express from 'express';
import React from "react";
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home'
const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />); // If we see this node.js file does not understand JSX and it will throw error here
  res.send(content);
});

app.listen(3000, () => {
  console.log("Listining on port 3000");
});
