import React, { useState, useEffect, useRef } from "react";
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Scrollbar } from 'smooth-scrollbar-react';
import "./detailView.css";
import KeySpecs from "../components/keySpec";
import { useNavigate, useParams } from "react-router-dom";
import { getRole, getToken } from "../util/data";
import Review from "../components/addreview";
import Reviews from "../components/reviews";

function DetailView() {
    const [price, setPrice] = useState(0);
    const [boxes, setBoxes] = useState(0);
    const [flag, setFlag] = useState(false);
const [review,setReview] = useState([]);
    const [productData, setProductData] = useState({
        keySpecs: {
            commercial: "",
            residential: "",
            itemColor: "",
            availableColors: [],
            tileFinish: ""
        },
        detail: {
            available: "",
            sizes: [],
            size: "",
            style: "",
            outdooruse: "",
            SpFtPerBox: 0,
            thickness: 0,
            weight: 0,
            location: []
        },
        _id: "",
        productName: "",
        img: "",
        pricePerSqFt: "",
        manufacturer: "",
        category: "",
        material: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        imageUrls: []
    });
    const nav = useNavigate();
    const { _id } = useParams();
    const token = getToken()
    const topRef = useRef(null);
    useEffect(() => {
        fetch("http://localhost:5454/api/products/id/" + _id, {
            method: 'GET',
            headers: {
                // 'content-type': 'application/json',
                'authorization': token,
            }
        })
            .then(res => {
                // console.log("@@@32 details res",res)
             return res.json()
            })
            .then(res => {
                console.log("#@#@#@ product",res);
                setProductData(res.product)
                setReview(res.review)
            });

            if (topRef.current) {
                topRef.current.scrollIntoView({ behavior: 'smooth' });
              }   
    }, [])

    // let productData = getbyid(0);

    // console.log("##product  data ",productData);
    // console.log("##product product Name  data ",productData.productName);
    // console.log("##product  data.detail. ",productData.detail.sizes);



    return (<>
        <div className="container">
            <div ref={topRef} className="row">
                <div className="col-6">
                    <div className="row">
                            {productData.imageUrls.map((ele)=>{
                                return (
                                    <div className="col-6">
                                    <img src={ele.imgUrl} className="img-fluid" alt="tile" />
                                </div>
                                );
                            })}
                    </div>


                </div>

                {/* ############# detail part ############# */}

                <div className="col">

                    <div className='d-flex justify-content-between m-3'>
                        <div className="btn mybtn" onClick={() => {
                            nav("/home")
                        }}> &#x2190; Back</div>
                        <Typography level="title-lg">{productData.productName}</Typography>
                        {/* <Typography level="body-sm">April 24 to May 02, 2021</Typography> */}

                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm">
                            <AddShoppingCartIcon className='me-1 iconbtn' />
                        </IconButton>
                    </div>

                    <div ><Typography level="title-sm">price/Sq.ft. (in $) : {productData.pricePerSqFt}</Typography></div>
                    {/* ## fun to cal price per box */}
                    <div ><Typography level="title-sm">price/box (in $) : {productData.pricePerSqFt * productData.detail.SpFtPerBox}</Typography></div>
                    {productData.productDiscription ?? <div className="m-1"><Typography level="title-sm">{productData.productDiscription}</Typography></div>}

                    {/* <div className="specs btn d-block mt-3 mb-2">View Specs</div> */}
                    <KeySpecs productData={productData} />

                    <Typography level="title-lg">Quantity</Typography>
                    <br />
                    <input className="form-control me-2 mt-3" type="text" placeholder="Enter Sq. ft." onChange={(e) => {
                        let tempPrice, tempBoxes

                        if (flag) {
                            let temp = ((10 / e.target.value) * 100) + e.target.value
                            tempPrice = temp * productData.pricePerSqFt
                            tempBoxes = temp / productData.detail.SpFtPerBox

                        }
                        else {
                            tempPrice = e.target.value * productData.pricePerSqFt
                            tempBoxes = e.target.value / productData.detail.SpFtPerBox
                        }

                        setPrice(tempPrice)
                        setBoxes(tempBoxes)

                    }} />
                    <input className="form-control me-2 mt-3" type="text" placeholder="number of boxes (auto fill)" value={"no. boxes " + boxes} />



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



                    <br />

                    <div className="btn mybtn"
                    onClick={()=>{
                        alert("order placed")
                      }}
                    >Pay price : &#8377; {price} </div>
                   {
                    getRole() == "1" && 
                    (
                        <div className="mybtn btn d-block mt-3 mb-2" onClick={() => {
                            fetch(
                                "http://localhost:5454/api/admin/products/" + _id, {
                                method: 'Delete',
                                headers: {
                                    'content-type': 'application/json',
                                    'authorization': getToken(),
                                },
    
                            }
                            ).then(res => {
                                console.log("#### delete product", res)
                                if (res.status == 201) {
                                    nav("/home")
                                }
                            })
                        }}>delete &rarr;</div>
                    )
                   }
                   <Review productData={productData}/>
                </div>

            </div>

        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Reviews review={review}/>
                </div>
            </div>
        </div>
    </>);

}
export default DetailView;

