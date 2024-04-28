import React, { useEffect, useState } from "react";
import "../pages/detailView.css";
// import ProductCard from "./productcard";
// import { Divider } from "@mui/material";
// import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { useNavigate } from "react-router-dom";
import { getToken } from "../util/data";

// function formatArray(arr) {
//     let arr1 = arr.map((elt) => {
//         return " " + elt + " ,"
//     })
//     arr1[arr1.length - 1] = " " + arr[arr.length - 1]
//     return arr1
// }

function Review(props) {
    let productData = props.productData;
    const [myReview, setMyreview] = useState("");
    const [user, setUser] = useState({});
    const nav = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5454/api/users/profile", {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': getToken(),
            }
        })
            .then(res => {
                // console.log("### raw res profile", res)
                if (res.status == 500) {
                    nav("/")
                    localStorage.clear()
                }
                return res.json()
            })
            .then(res => {
                console.log("### res content profile", res)
                setUser(res)
            })
    }, [])

    return (<>

        <div className="btn specs  d-block mt-3 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModa"> Give Review </div>


        <div className="modal fade" id="exampleModa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel"><Typography level="title-lg">{productData.productName}</Typography></h1>
                        <button type="button" className="btn mybtn" style={{ fontSize: 15 }} data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>


                    <div className="modal-body">
                        <div className="container">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">First name</label>
                                    <span className="" style={{color:"black"}}> : {user.firstName}</span>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Last name</label>
                                    <span className="" style={{color:"black"}}> : {user.lastName}</span>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Write your review </label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="value for money "
                                        value={myReview} onChange={(e) => {
                                            console.log("$#$#",productData._id)
                                            setMyreview(e.target.value)
                                        }} />
                                </div>
                                <div class="col-12">
                                    <button class="btn mybtn"
                                        onClick={(e) => {
                                            // e.preventDefault()
                                            const finalReview = {
                                                user: user._id
                                                , productId: productData._id
                                                , review: myReview
                                            }
                                            console.log("finalreview", finalReview)
                                            fetch(
                                                "http://localhost:5454/api/reviews/create", {
                                                method: 'Post',
                                                headers: {
                                                    'content-type': 'application/json',
                                                    'authorization': getToken(),
                                                },
                                                body:JSON.stringify({user:user,productId:productData._id,review:myReview})
                                            }
                                            ).then(res => {
                                                return res.json()
                                            }).then(
                                                res => {
                                                    console.log("### reviews ##", res)
                                                    
                                                }
                                            )
                                        }}
                                    >Add</button>
                                </div>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>);
}

export default Review






