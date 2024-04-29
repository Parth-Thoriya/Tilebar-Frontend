import React, { useEffect, useState } from "react";
import "../pages/detailView.css";
import Typography from '@mui/joy/Typography';
import { useNavigate } from "react-router-dom";
import { getBaseUrl, getToken } from "../util/data";
function Address(props) {
    const [address, setAddress] = useState({firstName:"",lastName:"", streetAddress:"", city:"", state:"", zipCode:"", landmark:"", user:"", mobile:"" });
    const firstname = props.user.firstName;
    const lastname = props.user.lastName;
const nav = useNavigate();
    useEffect(() => {
        setAddress({...address,firstName:firstname,lastName:lastname,user:props.user._id})
    }, []);

    return (<>

        <div className="btn specs  d-block mt-3 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add address </div>


        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel"><Typography level="title-lg">{`${firstname} ${lastname}`}</Typography></h1>
                        <button type="button" className="btn mybtn" style={{ fontSize: 15 }} data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>


                    <div className="modal-body">
                        <div className="container">


                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="inputEmail4" value={address.firstName} 
                                    onChange={(e) => {
                                        setAddress({...address,firstName:e.target.value})
                                     }} />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="inputEmail4" value={address.lastName}
                                     onChange={(e) => { 
                                        setAddress({...address,lastName:e.target.value})
                                     }} />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Address </label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                                        value={address.streetAddress} onChange={(e) => { 
                                            setAddress({...address,streetAddress:e.target.value})
                                        }} />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity" value={address.city}
                                     onChange={(e) => { 
                                        setAddress({...address,city:e.target.value})
                                     }} />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">State</label>
                                    <select id="inputState" class="form-select"
                                    onChange={(e)=>{
                                        setAddress({...address,state:e.target.value})
                                    }}
                                    >
                                        <option value="" selected>Choose...</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                    </select>
                                </div>

                                <div class="col-md-4">
                                    <label for="inputZip" class="form-label">Zip code</label>
                                    <input type="text" class="form-control" id="inputZip" value={address.zipCode} 
                                    onChange={(e) => {
                                        setAddress({...address,zipCode:e.target.value})
                                     }} />
                                </div>

                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">land mark</label>
                                    <input type="text" class="form-control" id="inputEmail4" value={address.landmark}
                                     onChange={(e) => {
                                        setAddress({...address,landmark:e.target.value})
                                      }} />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">mobile number</label>
                                    <input type="text" class="form-control" id="inputEmail4" value={address.mobile} 
                                    onChange={(e) => { 
                                        setAddress({...address,mobile:e.target.value})
                                    }} />
                                </div>
                                <div class="col-12">
                                    <button  class="btn btn-primary"
                                    onClick={(e)=>{
                                        e.preventDefault()                                        
                                        fetch(
                                            getBaseUrl()+"/api/users/profile", {
                                            method: 'Post',
                                            headers: {
                                                'content-type': 'application/json',
                                                'authorization': getToken(),
                                            },
                                            body:JSON.stringify({user:props.user,address:address})
                                        }
                                        ).then(res => {
                                            return res.json()
                                        }).then(
                                            res => {}
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
export default Address