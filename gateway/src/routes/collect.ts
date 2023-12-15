import express from 'express'
const router = express.Router();
const { body, validationResult } = require('express-validator');
import { collect } from '../controllers/collect'

router.post("/collect", body('type').not().isEmpty(), (req, res) => {
    //Use Middleware to check if required values are available
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            code: 400,
            status: "error",
            data: errors.array() 
        });
    }

    //call the collection function from the controller
    collect(req.body, res)

});

export default router;