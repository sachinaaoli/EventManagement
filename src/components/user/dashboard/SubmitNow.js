import React, { useState } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import { Payment } from '../../utiles/Payment';
import Khalti from '../payment/Khalti';
import { Esewa } from '../payment/Esewa';
import './SubmitNow.css'; // Import CSS file for styling

const SubmitNow = () => {
    const [isPayment, setIsPayment] = useState({
        esewa: false,
        khalti: false,
    });

    const advancePayment = 1000;
    const TotalPrice = advancePayment;

    const path = "https://uat.esewa.com.np/epay/main";
    const params = {
        amt: advancePayment,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: advancePayment,
        pid: "ee2c3cal",
        scd: "EPAYTEST",
        su: "https://merchant.com.np/page/esewa_payment_success",
        fu: "https://merchant.com.np/page/esewa_payment_failed",
    };

    const handlePayment = (id) => {
        console.log('Payment method clicked:', id);
        if (id === 1) {
            setIsPayment({
                esewa: true,
                khalti: false,
                cod: false,
            });
        } else if (id === 2) {
            let checkout = new KhaltiCheckout(Khalti);
            checkout.show({ amount: 1000 });
        }
    };

    return (
        <div className='submit-now-container'>
            <h2 className='payment-header'>Payment Method</h2>
            <section className='payment-methods'>
                {Payment.map((item, idx) => (
                    <div
                        key={idx}
                        className='payment-method'
                        onClick={() => handlePayment(item.id)}
                    >
                        <img src={item.logo} alt="logo" className='payment-logo' />
                        <h1 className='payment-name'>{item.name}</h1>
                    </div>
                ))}
            </section>
            {isPayment.esewa && <Esewa path={path} params={params} />}
            <div className='total-price-container'>
                <h1 className='total-price'>Advance Payment: {TotalPrice}</h1>
            </div>
        </div>
    );
};

export default SubmitNow;
