import React, { useState } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { Esewa } from '../payment/Esewa';
import KhaltiCheckout from 'khalti-checkout-web';
import { Payment } from '../../utiles/Payment';
import Khalti from '../payment/Khalti';

const BuyPackage = () => {
  const Packages = useSelector((state) => state.Buy?.data || []);

  const [isPayment, setIsPayment] = useState({
    esewa: false,
    khalti: false,
    cod: false,
  });
  let checkout = new KhaltiCheckout(Khalti);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'type', // Assuming 'type' is the key for the package name
      key: 'type',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity', // Assuming 'quantity' is the key for the package quantity
      key: 'quantity',
    },
  ];

  const totalQuantity = Packages.reduce((previous, item) => {
    return item.quantity + previous; // Adjusted to use 'quantity' key
  }, 0);

  const TotalPrice = Packages.reduce((previous, item) => {
    return item.price * item.quantity + previous; // Adjusted to use 'price' and 'quantity' keys
  }, 0);

  const path = 'https://uat.esewa.com.np/epay/main';
  const params = {
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: 'ee2c3cal',
    scd: 'EPAYTEST',
    su: 'https://merchant.com.np/page/esewa_payment_success',
    fu: 'https://merchant.com.np/page/esewa_payment_failed',
  };

  const handlePayment = (id) => {
    console.log('safas', id);
    if (id === 1) {
      setIsPayment({
        esewa: true,
        khalti: false,
      });
    } else if (id === 2) {
      let checkout = new KhaltiCheckout(Khalti);

      checkout.show({ amount: 1000 });
    }
  };

  return (
    <div className='mt-5 font-varela px-6'>
      <div className='grid grid-cols-4 gap-x-3'>
        <div className='col-span-2'>
          <Table dataSource={Packages} columns={columns} rowKey='id' />{' '}
          {/* Adjusted to use 'id' as the row key */}
        </div>
        <div className='col-span-2'>
          <h2>Payment Method</h2>
          <section className='flex gap-x-4 pt-3'>
            {Payment.map((item, idx) => {
              return (
                <div
                  key={idx}
                  style={{ color: `${item.color}` }}
                  className='h-8 text-lg font-varela'
                  onClick={() => handlePayment(item.id)}
                >
                  <img src={item.logo} alt='logo' className='h-14' />
                  <h1 className='text-center'>{item.name}</h1>
                </div>
              );
            })}
          </section>
          {isPayment.esewa && <Esewa path={path} params={params} />}
        </div>
      </div>
      <div className='flex justify-center gap-3'>
        <h1>Total Amount:{TotalPrice} </h1>
      </div>
    </div>
  );
};

export default BuyPackage;