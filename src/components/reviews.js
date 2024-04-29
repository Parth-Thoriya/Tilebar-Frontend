import React from "react";
import "./reviews.css";
function Reviews(props) {
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