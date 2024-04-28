import React from "react";
import "./reviews.css";
// let productReviews= [
//   {
//     "pid": 1,
//     "uid": 101,
//     "userName": "Aarav Patel",
//     "reviewHeading": "Tilebar: Elevating Spaces with Stunning Tiles!",
//     "reviewBody": "Transformed my space with exquisite tiles, thanks to Tilebar!"
//   },
//   {
//     "pid": 2,
//     "uid": 102,
//     "userName": "Anaya Sharma",
//     "reviewHeading": "Tilebar: Disappointing Tile Experience",
//     "reviewBody": "Poor quality tiles and frustrating customer service experience at Tilebar."
//   },
//   {
//     "pid": 3,
//     "uid": 103,
//     "userName": "Aaradhya Reddy",
//     "reviewHeading": "Impressive Selection at Tilebar",
//     "reviewBody": "Found exactly what I needed among the vast tile options!"
//   },
//   {
//     "pid": 4,
//     "uid": 104,
//     "userName": "Aryan Kumar",
//     "reviewHeading": "Tilebar: Great Value for Quality Tiles",
//     "reviewBody": "Affordable prices without compromising on tile quality. Highly recommended."
//   },
//   {
//     "pid": 5,
//     "uid": 105,
//     "userName": "Diya Gupta",
//     "reviewHeading": "Tilebar: Lacking Customer Support",
//     "reviewBody": "Issues with order fulfillment and unresponsive support team."
//   },
//   {
//     "pid": 6,
//     "uid": 106,
//     "userName": "Ishaan Singh",
//     "reviewHeading": "Exceptional Service and Expertise",
//     "reviewBody": "Staff provided helpful guidance in choosing the perfect tiles for my project."
//   },
//   {
//     "pid": 7,
//     "uid": 107,
//     "userName": "Saanvi Mehta",
//     "reviewHeading": "Tilebar: Inconsistent Tile Quality",
//     "reviewBody": "Received tiles with variations in color and size, disappointing overall."
//   }
// ]

function Reviews(props) {
    // profile photo https://i.imgur.com/V3ICjlm.jpg
    // Heading: "Tilebar: Disappointing Tile Experience"
// Review: "Poor quality tiles and frustrating customer service experience at Tilebar."
let productReviews = props.review;
        let formmatedReviews = productReviews.map((pr)=>{
            return (<>
            <div className="container">
            <div className="row justify-content-center">
                
                    <div className="card">
                        <div className="row d-flex">
                            <div className="col-3 d-flex align-items-center">
                                 <img className="profile-pic img-fluid mx-auto" src="https://lh3.googleusercontent.com/-55xDKDTVK-w/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmshcR95HxGK5eKU84IG0AjYtit8A/photo.jpg?sz=46" /> 
                            </div>
                            <div className="col">                                
                                <h3 className="mt-2 mb-0">{pr.user.firstName} {pr.user.lastName}</h3>                                
                                <p>10 Sept</p>
                                <div className="mydivider me-2"></div>
                                <div className="row">
                                    <p>{pr.review}</p>
                                    {/* <p >{pr.reviewBody}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
            </>)
        });
    return (<>
    {formmatedReviews}
    </>);
}

export default Reviews