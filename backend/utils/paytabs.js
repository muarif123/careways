const paytabs = require('paytabs');

const paytabsConfig = {
  secretKey: 'YOUR_PAYTABS_SECRET_KEY', // Replace with your actual secret key
  merchantID: 'YOUR_PAYTABS_MERCHANT_ID'  // Replace with your actual merchant ID
};

const initiatePayment = async (req, res) => {
  const { amount, currency, productDescription, itemName, userEmail } = req.body;

  try {
    const payment = new paytabs.Payment(paytabsConfig);

    const data = {
      'tran_type': 'sale',
      'cart_details': [
        {
          'item_name': itemName,
          'item_desc': productDescription,
          'item_price': amount,
          'item_qty': 1
        }
      ],
      'return_url': 'http://localhost:3000/payment-success', // Replace with your success redirect URL
      'cms_with_tax': 'VAT', // Adjust tax settings as needed
      'shipping_charges': '0', // Set shipping charges if applicable
      'currency': currency,
      'customer_details': {
        'name': userEmail.split('@')[0], // Extract username from email
        'email': userEmail
      },
      'product_category': 'general' // Adjust product category if needed
    };

    const result = await payment.createPayPage(data);

    if (result.result.response_code === '200') {
      res.status(200).json({ redirectUrl: result.result.payment_url });
    } else {
      console.error('PayTabs Error:', result.result.response_message);
      res.status(500).json({ error: 'Payment initiation failed' });
    }
  } catch (error) {
    console.error('PayTabs Error:', error);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
};

module.exports = { initiatePayment };
