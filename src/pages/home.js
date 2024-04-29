import Carousel from "../components/carousel"
import React, { useEffect, useState } from "react";
import ProductCard from "../components/productcard";
import { Scrollbar } from 'smooth-scrollbar-react';
import { getBaseUrl, getToken } from "../util/data";
import { useNavigate } from "react-router-dom";
import { getcategoryList, mydata } from "../util/data";
function Home() {
  const [tileProducts, setTileProducts] = useState([])
  const nav = useNavigate();
  const token = getToken()
  useEffect(() => {
    fetch(getBaseUrl()+"/api/products", {
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
        setTileProducts(res.content)
      })
  }, [])
  function categoryList(tileProducts) {
    mydata(tileProducts)
    let filterData = getcategoryList(tileProducts);    
    filterData = filterData.map((ele) => {
      let templist = [];
      for (let i = 0; i < 5; i++) {
        if (i < ele.list.length) {
          templist.push(ele.list[i])
        }
      }
      return { ...ele, list: templist }
    })
    let formmatedList = filterData.map((data) => {
      let list = data.list;
      return (<div className="container mt-3">
        <div className="row">
          <h1 className="col"> {data.category} </h1>
          <button className="col-1 btn mybtn border-0" onClick={() => {
            nav("/home/catogary/" + data.category)
          }}>More &#x1F892;&#x1F892;&#x1F892;</button>
        </div>
        <div className="row" >
          <Scrollbar className='d-flex' plugins={{
            overscroll: { effect: 'glow', },
          }}>
            {
              list.map((pt) => {
                return <ProductCard productTile={pt} />

              })}
          </Scrollbar>
        </div>
      </div>)

    });

    return (formmatedList)
  }
  return (<>
    <Carousel />    
    {categoryList(tileProducts)}    
  </>)

}
export default Home