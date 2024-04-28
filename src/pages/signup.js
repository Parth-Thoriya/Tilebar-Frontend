import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const nav = useNavigate()
    let statusCode = 0;

    if (localStorage.getItem('jwt') != null) {
        nav('/home')
    }
    return (<>
        <div style={{ height: "100vh", backgroundColor: "grey" }} >
            <div className="container my-auto mx-auto">
                <div className="row">
                    <div className="col-4 mx-auto">
                        <div class="card">
                            <div class="card-img d-flex justify-content-center">
                                <img src="./assets/logo.jpg" class="img-fluid" />
                            </div>
                            <div class="card-title">
                                <h5>Welcome to Tilebar!</h5>
                            </div>
                            <div>
                                <div class="input-group flex-nowrap mt-2 px-3">
                                    <span class="input-group-text iconbtn" id="addon-wrapping"><i class='fas' style={{ fontSize: 20 }} >&#xf2bd;</i></span>
                                    <input type="text" placeholder="first name" onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }} class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div class="input-group flex-nowrap mt-2 px-3">
                                    <span class="input-group-text iconbtn" id="addon-wrapping"><i class='fas' style={{ fontSize: 20 }} >&#xf2bd;</i></span>
                                    <input type="text" placeholder="last name" onChange={(e) => {
                                        setLastName(e.target.value)
                                    }} class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div class="input-group flex-nowrap mt-2 px-3">
                                    <span class="input-group-text iconbtn" id="addon-wrapping">@</span>
                                    <input type="text" placeholder="Email" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>

                                <div class="input-group flex-nowrap mt-2 px-3">
                                    <span class="input-group-text" id="addon-wrapping"><i style={{ fontSize: 20 }} class="fa iconbtn">&#xf023;</i></span>
                                    <input type="text" placeholder="Password" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </div>
                            <div class="mx-auto mt-3 mb-4">
                                <button class="btn mybtn"
                                    onClick={() => {
                                        fetch("http://localhost:5454/auth/signup",
                                            {
                                                headers: {
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                method: "POST",
                                                body: JSON.stringify({
                                                    "email": email,
                                                    "password": password,
                                                    "firstName": firstName,
                                                    "lastName": lastName,
                                                })
                                            }).then(res => {
                                                statusCode = res.status
                                                console.log("##### res", res)
                                                return res.json()
                                            }).then(res => {
                                                console.log("#### status", statusCode)
                                                console.log("##### res json", res)
                                                if (statusCode == 200) {
                                                    localStorage.setItem("role", res.role)
                                                    localStorage.setItem("jwt", res.jwt)
                                                    nav('/home')
                                                }
                                                else if (statusCode == 500) {
                                                    alert(res.error)
                                                }
                                                else {
                                                    alert(res.message)
                                                }
                                            })

                                    }}>
                                    Sign Up
                                </button>
                            </div>


                            <div class="card-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>);
}


export default SignUp