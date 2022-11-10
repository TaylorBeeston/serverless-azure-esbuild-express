import serverless from "serverless-http";
import express, { Router, json } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).send("nice");
});

router.get("/hello", (req, res) => {
    console.log("You are there");
    return res.status(200).send("Nice!");
});
router.get("/nice", (req, res) => {
    return res.status(200).send("Noice");
});
router.get("/:test", (req, res) => {
    return res.status(200).send(`Echoing ${req.params.test}`);
});

app.use("/api", router);

const handler = serverless(app, { provider: "azure" });

module.exports.app = async (context, req) => {
    req.rawBody ||= "";
    context.res = await handler(context, req);
};
