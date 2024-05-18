// Write your code here//
import Popup from 'react-js-popup'
import Payment from '../Payment'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const items=cartList.length 

      const totalPrice=cartList.reduce((acc,item)=>acc+item.quantity*item.price,0)


      return (
        <>
          <div>
            <h1>
              <span>Order Total:</span> Rs {totalPrice}/-
            </h1>
            <p>Items in cart</p>
            <Popup modal trigger={<button type="button">Checkout</button>} position="top left">{close=><Payment close={close}/>}</Popup>
            
          </div>
          
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
