import express from 'express'
import Transaction from '../models/transactionModel';
const crypto = require("crypto");

const router = express.Router()

//Save Transaction
router.post("/transaction", async(req, res) => {
    req.body.transactionId = crypto.randomBytes(4).toString('hex');
    const transactionData = new Transaction(req.body);

      try {
        const transaction =  await transactionData.save()
    
        if (transaction) {
            res.status(200).json({
              success: true,
              message: 'Transaction Saved Successfully',
              data: transaction
            })
        }
      } catch (error) {
          res.status(404).json({
            success: false,
            message: 'Transaction Failed'
          });
      }
});

//Retrieve one transaction
router.get("/transaction/:id", (req, res) => {
  const id = req.params.id;

  try {
    const transaction =  Transaction.findOne({ transactionId: id });

    if (transaction) {
        res.status(200).json({
          success: true,
          message: 'Transaction Retrived Successfully',
          data: transaction
        })
    }
  } catch (error) {
      res.status(404).json({
        success: false,
        message: `Unable to find matching document with id: ${req.params.id}`
      });
  }

});

//Retrive all Transactions
router.get("/transactions", async (req, res) => {
  try {
    const transactions =  await Transaction.find({});

    if (transactions) {
        res.status(200).json({
          success: true,
          message: 'Transactions Retrived Successfully',
          data: transactions
        })
    }
  } catch (error) {
      res.status(404).json({
        success: false,
        message: `Unable to retrieve the transactions.`
      });
  }
});

export default router