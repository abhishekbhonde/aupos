import express from "express";
import cors from "cors";

import logger from "./middlewares/logger.middleware";
import errorHandler from "./middlewares/error.middleware";

import healthRoute from "./routes/health.route";
import contextRoute from "./routes/context.route";
import actionRoute from "./routes/action.route";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(logger);

app.use("/health", healthRoute);
app.use("/context", contextRoute);
app.use("/action", actionRoute);

app.use(errorHandler);

export default app;
