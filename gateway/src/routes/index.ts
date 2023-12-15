import express from 'express'
const router = express.Router();
import transactions from './transactions';
import collect from './collect';

router.use(transactions);
router.use(collect);

router.get("/status", (req, res) => {
    res.status(200).json({
        code: 200,
        status: "success",
        data: {
            app: "Gateway",
            msg: "You are welcome to my amazing payment gateway"
        }
    })
});

export default router;