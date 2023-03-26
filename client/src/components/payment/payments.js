const upiPayments = require('upi-payments');
const initiatePayment = async (req, res) => {
    const options = {
      vpa: 'user@upi', // UPI ID of the recipient
      amount: 100, // Amount to be paid
      note: 'Payment for the order #123', // Payment note
      currency: 'INR', // Currency
      merchantCode: 'XXXXX', // Merchant code (optional)
      transactionRef: 'XXXXXXXX', // Transaction reference ID (optional)
    };
  
    try {
      const payment = await upiPayments.initiatePayment(options);
      console.log(payment); // Payment response
      res.status(200).json(payment);
    } catch (error) {
      console.log(error); // Payment error
      res.status(500).json({ message: 'Payment failed' });
    }
  };

  module.exports = { initiatePayment };
