import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBaseUrl, getRole } from "../util/data";
function LogIn() {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const nav = useNavigate()
   let statusCode = 0;
    return (<>
    <div style={{height:"100vh",backgroundColor:"grey"}} onLoad={()=>{
if(localStorage.getItem('jwt') != null){    
    nav('/home');
}
    }}>
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
                            {/* <input type="text" placeholder="Enter your email" class="input" /> */}

                            <div class="input-group flex-nowrap px-3">
                                <span class="input-group-text iconbtn" id="addon-wrapping">@</span>
                                <input type="text"  placeholder="Email" onChange={(e)=>{
                                    setEmail(e.target.value)
                                }} class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            {/* <input type="password" placeholder="Enter your password " s class="input" /> */}
                            <div class="input-group flex-nowrap mt-2 px-3">
                                <span class="input-group-text" id="addon-wrapping"><i style={{fontSize:20}} class="fa iconbtn">&#xf023;</i></span>
                                <input type="text"  placeholder="Password" onChange={(e)=>{
                                    setPassword(e.target.value)
                                }} class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                        </div>
                        <div class="mx-auto mt-3 mb-4">
                            <button class="btn mybtn"
                             onClick={()=>{
                                fetch(getBaseUrl()+"/auth/login",
                                {
                                    headers: {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    method: "POST",
                                    body: JSON.stringify({  "email":email,
                                    "password":password})
                                }).then(res=>{
                                    statusCode = res.status
                                    return res.json()
                                }).then(res=>{                                    
                                    if(statusCode == 200){
                                        
                                        localStorage.setItem("jwt",res.jwt)                                        
                                        if(res.role === "CUSTOMER"){
                                            localStorage.setItem("role",3)
                                        }
                                        else if(res.role === "ADMIN"){
                                            localStorage.setItem("role",1)
                                        }
                                        else{
                                            localStorage.setItem("role",2)
                                        }                                        
                                        nav('/home')                                        
                                    }
                                    else if(statusCode == 401){                                        
                                        alert("invalid password")                                
                                    }
                                    else{
                                        alert("user not found")
                                    }                                  
                                })

                            }}>
                                Log in
                            </button>
                        </div>

                        
                        <div class="card-footer">                            
                            <p>New to Tilebar?create an account</p>
                            <button className="btn mybtn" 
                             onClick={()=>{
                                nav('/signup')
                             }}
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    

    </>);
}


export default LogIn