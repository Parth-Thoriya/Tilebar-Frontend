import React from "react";
import './productStyle.css';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";
import { getToken } from "../util/data";

function ProductCard(props) {
  const nav = useNavigate();


  let productTile = props.productTile;

  return (<>
    <div className="card  col-3 border-0">

      <div className='d-flex justify-content-between m-3'>
        <Typography level="title-lg">{productTile.productName}</Typography>
        {/* <Typography level="body-sm">April 24 to May 02, 2021</Typography> */}

        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          onClick={(e) => {
            fetch("http://localhost:5454/api/users/profile", {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                'authorization': getToken(),
              }
            })
              .then(res => {
                // console.log("### raw res profile", res)
                // if (res.status == 500) {
                //     nav("/")
                //     localStorage.clear()
                // }
                return res.json()
              })
              .then(resUser => {
                console.log("## user cart ##",resUser)
                // cart
                fetch(
                  "http://localhost:5454/api/cart/add", {
                  method: 'Put',
                  headers: {
                    'content-type': 'application/json',
                    'authorization': getToken(),
                  },
                  body: JSON.stringify({user:resUser,productId:productTile._id,size:productTile.detail.size,weight:productTile.detail.weight})
                }
                ).then(res => {
                  console.log("### cart raw res",res)
                  return res.json()
                }).then(
                  res => {
                    console.log("### cart ##", res)

                  }
                )
              })

          }}
        >
          <AddShoppingCartIcon className='iconbtn me-1' />
        </IconButton>
      </div>

      <img src={productTile.imageUrls[0].imgUrl} className="card-img-top image img-fluid" style={{ height: "200px" }} alt="tile" />


      <div className="card-body">

        {/* <h5 className="card-title">{productTile.productName}</h5> */}
        {/* <div className="designation mb-2  ">{productTile.manufacturer}</div> */}

        <br />
        <div className="card-text">
          <div className="row">
            <div ><Typography level="title-sm">Color : {productTile.keySpecs.itemColor}</Typography></div>
            <div ><Typography level="title-sm">Size : {productTile.detail.size}</Typography></div>
            <div ><Typography level="title-sm">Manufactured by {productTile.manufacturer}</Typography></div>
          </div>
          {/* <Typography level="title-sm">Available colors : </Typography> */}

          {/* {productTile.keySpecs.availableColors.map((cl)=>{
        return <Typography level="body-sm">  {cl}</Typography>})} */}


          {/* <div className="exp">"exp"</div>          
          <br />
          <div className="joiningdate">{productTile.price}</div> */}
        </div>
        <br />
        <div className="subtitle">
          <Typography level="body-xs">Total price (per sq. ft.) : $ {productTile.pricePerSqFt}</Typography>
        </div>

        <div className="view btn d-block mt-3 mb-2" onClick={() => {
          nav("/home/detailView/" + productTile._id)
        }}>view details &rarr;</div>




      </div>
    </div>

  </>);
}
export default ProductCard