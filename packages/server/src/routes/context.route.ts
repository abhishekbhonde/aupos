import {Router} from 'express';
const router = Router();


router.post("/", async (req, res) => {
    const {url, html, selection} = req.body;
    console.log("Received context:", {url, html, selection});
    // Here, you would typically process and store the context data.
    console.log(url, htmlLength:html?.length, selectionLength:selection?.length);
    const contextId = Date.now().toString(); // Dummy context ID
     res.json({
    message: "Context received successfully",
    contextId
  });
});

export default router;