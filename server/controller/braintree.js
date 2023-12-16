var braintree = require("braintree");
require("dotenv").config();

var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY ,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

class brainTree {
  ganerateToken(req, res) {
    gateway.clientToken.generate({}, (err, response) => {
      if (err) {
        return res.json(err);
      }
      return res.json(response);
    });
  }

  paymentProcess(req, res) {
    let { amountTotal, paymentMethod } = req.body;
    console.log("checking....." )
    // gateway.transaction.sale(
    //   {
    //     amount: amountTotal,
    //     paymentMethodNonce: paymentMethod,
    //     options: {
    //       submitForSettlement: true,
    //     },
    //   },
    //   (err, result) => {
    //     console.log("err=====", err);
    //     console.log("result====", result)
    //     if (err) {
          
    //       return res.json(err);
    //     }

    //     if (result.success) {
    //       console.log("Transaction ID: " + result.transaction.id);
    //       return res.json(result);
    //     } else {
    //       return (result.message);
    //     }
    //   }
    // );
    //  amount: res.transaction.amount,
    // transactionId: res.transaction.id,
    let r = (Math.random() + 1).toString(36).substring(2);
    return res.json({transaction: {
      "amount": amountTotal,
      "id":  r
    }})
  }
}

const brainTreeController = new brainTree();
module.exports = brainTreeController;
