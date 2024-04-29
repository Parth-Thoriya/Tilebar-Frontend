import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const nav = useNavigate();
  return (
    <div className="sidebar  d-flex flex-column  p-3 rounded shadow m-3 sticky-top  " style={{ height: "100vh" }}>
      <div className="sidebar-header mt-3 mb-3 d-flex flex-column align-items-center">
        <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/portgas-d-ace-one-piece.jpg" alt="profile" className="img-fluid rounded-circle" style={{ width: '100px', height: '100px' }} />
      </div>
      <hr className="w-100 mt-3 mb-3" />
      <ul className="nav flex-column flex-grow-1">
        <li className="nav-item">
          <button className="nav-link btn mybtn border-0"
            onClick={() => {
              nav("/home/admin")
            }}
          >Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn mybtn border-0"
          onClick={() => {
            nav("/home/admin/aboutus")
          }}
          >About</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn mybtn border-0" onClick={() => {
            nav("/home/admin/createProduct")

          }}>Add a product</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn mybtn border-0">Contact</button>
        </li>
      </ul>
      <div className="flex-grow-1"></div>
    </div>
  );
}
function Dashboard() {
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="row ">
          <div className="col-md-3 ">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard;
