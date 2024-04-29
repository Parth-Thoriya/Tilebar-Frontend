let tileProducts;
function mydata(props) {     
tileProducts = props;
    return tileProducts;
}
function getData(){
return tileProducts;
}
function getbyid(id) {
    let temp = mydata();
    id = Number.parseInt(id)
    return temp.find(data =>  data.pid === id)
}
function getToken() {
    let token = 'Bearer ' + localStorage.getItem('jwt').toString()
return token;
}
function getRole(){
    let role = localStorage.getItem('role').toString();    
    return role;
}
function getcategoryList(tileProducts){
    let myCat = [];
    for (let i = 0; i < tileProducts.length; i++) {
      if (!myCat.includes(tileProducts[i].category)) {
        myCat.push(tileProducts[i].category)
      }
    }
    let filterData = myCat.map((cat) => {
      let temp = tileProducts.filter((data) => {
        if (data.category === cat) {
          return true
        }
        return false
      })
      return {
        category: cat,
        list: temp
      }
    });
    mydata(filterData);
    return filterData;
}
let totalamount = 0
function setCartPrice(amount){
    console.log("dataa",amount)
totalamount = totalamount + amount;
}
function getCartPrice(){
return totalamount;
}

function getBaseUrl(){
  return "https://tilebarbackend.onrender.com";
}
export { mydata , getbyid , getToken , getRole ,getcategoryList,getData, setCartPrice,getCartPrice,getBaseUrl}


