import React, { useEffect, useState } from 'react';
import Address from '../components/addAddress';
import { useNavigate } from 'react-router-dom';
import { getBaseUrl, getToken } from "../util/data";

const ProfilePage = () => {
    const [user, setUser] = useState({ address: [] });
    const [orders, setOrder] = useState();
    const nav = useNavigate();
    const token = getToken();
    useEffect(() => {
        fetch(getBaseUrl()+"/api/users/profile", {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': token,
            }
        })
            .then(res => {                
                if (res.status == 500) {
                    nav("/")
                    localStorage.clear()
                }
                return res.json()
            })
            .then(res => {                
                setUser(res)                
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="mt-5 p-2 rounded border-0 shadow">
                        <div className="card-body">
                            <div className='text-center'>
                                <img
                                    src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/portgas-d-ace-one-piece.jpg"  // Add your profile photo URL here
                                    alt="Profile"
                                    style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                                />
                                <h3 className="mt-2">{`${user.firstName} ${user.lastName}`}</h3>
                            </div>
                            <hr />
                            <p className="">
                                <strong>Email:</strong> {user.email}<br />
                                {/* <strong>Mobile:</strong> {user.mobile || 'N/A'}<br /> */}
                                <strong>Addresses:</strong><br />
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">streetAddress</th>
                                            <th scope="col">city</th>
                                            <th scope="col">zipCode</th>
                                            <th scope="col">state</th>
                                            <th scope="col">landmark</th>
                                            <th scope="col">mobile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.address.map(ele => {
                                            return (
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>{ele.firstName}</td>
                                                    <td>{ele.lastName}</td>
                                                    <td>{ele.streetAddress}</td>
                                                    <td>{ele.city}</td>
                                                    <td>{ele.zipCode}</td>
                                                    <td>{ele.state}</td>
                                                    <td>{ele.landmark}</td>
                                                    <td>{ele.mobile}</td>
                                                </tr>

                                            )
                                        })}
                                    </tbody>
                                </table>
                            </p>
                            <Address user={user} />
                        </div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="mt-5 p-2 rounded border-0 shadow">
                        <div className="card-body">
                            <h5 className="card-title">Order History</h5>
                            {orders.map(order => (
                                <div key={order.id}>
                                    <p><strong>Order ID:</strong> {order.id}</p>
                                    <p><strong>Date:</strong> {order.date}</p>
                                    <p><strong>Total:</strong> ${order.total}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProfilePage;
