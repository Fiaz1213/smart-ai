import express from "express";
import * as dotenv from "dotenv";
import { InferenceClient } from "@huggingface/inference";

dotenv.config();

const router = express.Router();

const client = new InferenceClient(process.env.HF_API_KEY);

router.route("/").get((req, res) => {
  res.send("HELLO FROM HUGGING FACE API");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const imageBlob = await client.textToImage({
      model: "black-forest-labs/FLUX.1-dev",
      inputs: prompt,
      parameters: { num_inference_steps: 20 },
    });

    // Convert Blob -> Base64
    const arrayBuffer = await imageBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");

    res.status(200).json({ photo: base64Image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message || "Failed to generate image");
  }
});

export default router;
