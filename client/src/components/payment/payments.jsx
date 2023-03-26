import UpiPayment from 'react-native-upi-pay';

const handlePayment = async () => {
    const options = {
      vpa: 'user@upi', // UPI ID of the recipient
      amount: '100', // Amount to be paid
      note: 'Payment for the order #123', // Payment note
      currency: 'INR', // Currency
      merchantCode: 'XXXXX', // Merchant code (optional)
      transactionRef: 'XXXXXXXX', // Transaction reference ID (optional)
    };
  
    try {
      const payment = await UpiPayment.initializePayment(options);
      console.log(payment); // Payment response
      // Payment success
    } catch (error) {
      console.log(error); // Payment error
      // Payment failed
    }
  };

  <Button title="Pay" onPress={handlePayment} />
