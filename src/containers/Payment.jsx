import React from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useNavigate } from 'react-router-dom';

import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal';

import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addToOrders } = React.useContext(AppContext);
  const { cart, buyer } = state;

  const navigate = useNavigate();

  const paypalOptions = {
    clientId:
      'AZV9zQnVu6xQKOAPvE6Pn3jLIsmJy2lxbbZAPVW8nJzoHioC7EuTEkA_h2jAflhOieXBFcnZdPw8V8eQ',
    intent: 'capture',
    currency: 'USD',
  };

  const paypalStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addToOrders(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.name}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-item">
          <div className="Payment-element">
            <h4>Total</h4>
            <span>${handleSumTotal()}</span>
          </div>
        </div>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            paypalStyles={paypalStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Payment Start')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
