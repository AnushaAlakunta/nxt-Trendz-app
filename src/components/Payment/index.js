import {useContext, useState} from 'react'

import CartContext from '../../context/CartContext'

const paymentOptionsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isDisabled: false,
  },
]

const Payment = () => {
  const {cartList} = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  const updatePaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }
  const onPlaceOrder = () => setIsOrderPlaced(true)
  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)
  const renderPaymentMethodsInput = () => (
    <ul>
      {paymentOptionsList.map(each => (
        <li key={each.id}>
          <input
            type='radio'
            name='paymentMethod'
            disabled={each.isDisabled}
            onChange={updatePaymentMethod}
            id={each.id}
          />
          <label htmlFor={each.id}>{each.displayText}</label>
        </li>
      ))}
    </ul>
  )
  return (
    <div>
      {isOrderPlaced ? (
        <p>Your order has been placed successfully</p>
      ) : (
        <>
          <h1>Payment Details</h1>
          <p>Payment Method</p>
          {renderPaymentMethodsInput()}
          <div>
            <p>Order details</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price: RS {getTotalPrice}</p>
          </div>
          <button
            disabled={paymentMethod === ''}
            type='button'
            onClick={onPlaceOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}
export default Payment
