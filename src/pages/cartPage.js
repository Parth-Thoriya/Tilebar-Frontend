import React, { useEffect, useState } from 'react'
import '../components/productStyle.css';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";
import { getBaseUrl, getCartPrice, getToken, setCartPrice } from "../util/data";
import { loadStripe } from "@stripe/stripe-js";

function CartProdut(props) {
  const [price, setPrice] = useState(0);
  const [boxes, setBoxes] = useState(0);
  const [flag, setFlag] = useState(false);
  const nav = useNavigate();
  let productTile = props.product;
  let pt = props.pt;
  return (<div className="card border-0">
    <div className='row'>
      <div className='col-4'>
        <div className='d-flex justify-content-between m-3'>
          <Typography level="title-lg">{productTile.productName}</Typography>
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            onClick={(e) => {
              fetch(getBaseUrl()+"/api/users/profile", {
                method: 'GET',
                headers: {
                  'content-type': 'application/json',
                  'authorization': getToken(),
                }
              })
                .then(res => {

                  return res.json()
                })
                .then(resUser => {
                  
                  fetch(
                    getBaseUrl()+"/api/cart/add", {
                    method: 'Put',
                    headers: {
                      'content-type': 'application/json',
                      'authorization': getToken(),
                    },
                    body: JSON.stringify({ user: resUser, productId: productTile._id, size: productTile.detail.size, weight: productTile.detail.weight })
                  }
                  ).then(res => {
                   
                    return res.json()
                  }).then(
                    res => {
                     

                    }
                  )
                })

            }}
          >
            <AddShoppingCartIcon className='iconbtn me-1' />
          </IconButton>
        </div>

        <img src={productTile.imageUrls[0].imgUrl} className="card-img-top ms-1 image img-fluid" style={{ height: "200px" }} alt="tile" />
      </div>
      <div className='col' >
        <div className="card-body">
          <br />
          <div className="card-text">
            <div className="row">
              <div ><Typography level="title-sm">Color : {productTile.keySpecs.itemColor}</Typography></div>
              <div ><Typography level="title-sm">Size : {productTile.detail.size}</Typography></div>
              <div ><Typography level="title-sm">Manufactured by {productTile.manufacturer}</Typography></div>
            </div>

          </div>
          <br />

          <div className="subtitle">
            <Typography level="body-xs">Total price(persq.ft.): ${productTile.pricePerSqFt}</Typography>
            <Typography level="body-xs">
              weight:{pt.weight}<br />
              quantity:{pt.quantity}<br />
              size:{pt.size}</Typography>
          </div>
          <Typography level="title-lg">Quantity</Typography>
          <br />
          <input className="form-control me-2 mt-3" type="text" placeholder="Enter Sq. ft." onChange={(e) => {
            let tempPrice, tempBoxes

            if (flag) {
              let temp = ((10 / e.target.value) * 100) + e.target.value
              tempPrice = temp * productTile.pricePerSqFt
              tempBoxes = temp / productTile.detail.SpFtPerBox

            }
            else {
              tempPrice = e.target.value * productTile.pricePerSqFt
              tempBoxes = e.target.value / productTile.detail.SpFtPerBox
            }

            setPrice(Number.parseInt(tempPrice))
            setBoxes(Number.parseInt(tempBoxes))

          }} />
          <input className="form-control me-2 mt-3" type="text" placeholder="number of boxes requried (auto fill)" value={"no. boxes " + boxes} />

          <div class="form-check mt-2">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required onChange={(e) => {

              setFlag(e.target.checked)
            }} />
            <label class="form-check-label" for="invalidCheck">
              Add 10% to cover cuts&waste
            </label>
            {/* <div class="invalid-feedback">
                          You must agree before submitting.
                      </div> */}
          </div>
                      <div className='row'>
                        {/* <div className='col-6'>
                        <input className="form-control me-2 mt-3" type="text" 
                        placeholder="Enter number of boxes you want buy" 
                        onChange={(e)=>{
                          let temp = Number.parseFloat(e.target.value)*productTile.detail.SpFtPerBox*productTile.pricePerSqFt
                          setPrice(Number.parseInt(temp))
                        }}
                         />
                        </div> */}
                        <button className='btn mybtn col-6'
                        onClick={(e)=>{
                          setCartPrice(price)
                          

                        }}
                        >ok</button>                          
                      </div>
          <div className="view btn d-block mt-3 mb-2" onClick={() => {
            nav("/home/detailView/" + productTile._id)
          }}>view details &rarr;</div>
        </div>
      </div>
    </div>
  </div>)
}
function CartPage() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalamount,setTotalAmount]=useState(0);
  const [flag,setFlag] = useState(false);
  const nav = useNavigate();
  useEffect(
    () => {
      fetch(getBaseUrl()+"/api/users/profile", {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': getToken(),
        }
      })
        .then(res => {

          return res.json()
        })
        .then(resUser => {
          fetch(
            getBaseUrl()+"/api/cart/", {
            method: 'get',
            headers: {
              'content-type': 'application/json',
              'authorization': getToken(),
            },
          }
          ).then(res => {
           
            return res.json()
          }).then(
            res => {
              
              setUser(resUser);
              setCart(res);
              setCartItems(res.cartItems)
              


            }
          )
        })
    }
    , []);
 
const formateditems = cartItems.map((pt)=>{
  return <CartProdut product={pt.product} pt={pt} />
})  
  const makePayment = async () => {
    const stripe = await loadStripe(process.env.pk)
    fetch(getBaseUrl()+"/api/payment/stripe", {
      method: 'Post',
      headers: {
        'content-type': 'application/json',
        'authorization': getToken(),
      },
      body: JSON.stringify({ totalamount: totalamount, products: cartItems.map((pt) => pt.product) ,user:user, address:user.address})
    })
      .then(res => {
        return res.json()
      })
      .then(res => {        
        let result = stripe.redirectToCheckout({ sessionId: res.id })        
      })

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Your Cart</h2>
        </div>
        <div className='row'>
          <div className='col'>{formateditems}</div>

          <div className="col-md-3 mt-5">
            <div className="card mb-3">
              <div className="card-header">Cart Summary</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Total Items: {cart.totalItem}</li>
                  <li className="list-group-item">Total Cart: {cart.totalPrice}</li>
                  <li className="list-group-item">Total Price: {totalamount}</li>
                  <li className="list-group-item">
                    
                  {!flag ? (<div className='btn mybtn' onClick={() => {
                      setTotalAmount(getCartPrice())                      
                      setFlag(true);
                    }}> Procced to pay </div>)
                    :
                    (<div className='btn mybtn' onClick={() => {
                      makePayment()
                    }}> Pay </div>)}                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartPage