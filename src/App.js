import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import classData from "./assets/class-data.json";
import ClassItem from "./components/ClassItem.jsx";
import { useState } from 'react';
//makes image url work
classData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [type, setType] = useState("All");
  const [time, setTime] = useState("All");
  const [enrol, setEnrol] = useState("No Sort");
  const [cartItems, setCartItems] = useState([]);
  const selectFilterType = eventKey =>{
    setType(eventKey);
  };
  const selectFilterTypeTime = eventKey =>{
    setTime(eventKey);
  }; 
  const matchesFilterType = item =>{
    if(type === "All"){
      return true;
    } else if (type === item.department){
      return true;
    } else{
      return false;
    }
  };
  const matchesFilterTime = item =>{
    if(time === "All"){
      return true;
    } else if(time === item.time){
      return true;
    } else{
      return false;
    }
  };
  const selectSort = eventKey =>{
    setEnrol(eventKey);
  };

  const setSort = () => {
    if(enrol === "Enrollment Numbers"){
      doublyFilteredData.sort((a,b) => {
        return a.enrollment - b.enrollment;
      }
      )
    }
  };

  function addToCart(item){
    if(!cartItems.includes(item)){
      setCartItems([...cartItems, item]);
    }
  };

  function removeFromCart(item){
    const ar = cartItems.filter((obj) => !(item.name === obj.name));
    setCartItems(ar);
  };
  function emptyCart(){
    setCartItems([]);
  }
  function totalClassTime(){
    let total = 0;
    for(let i = 0; i < cartItems.length; i++){
      total += cartItems[i].mins;
    }
    return total;
  }
  const filteredData = classData.filter(matchesFilterType);
  const doublyFilteredData = filteredData.filter(matchesFilterTime);
  return (
    
    <div className="App">
       <h1>C@B but different</h1>
      <div class="container">
      <div class="item">
      <h3>Tools:</h3>
      <h4>Filter by Class Time </h4>
      <Nav onSelect={selectFilterTypeTime} className="flex-column" >
        <Nav.Item><Nav.Link eventKey="All">No Filter</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="2-2:50 MWF">2-2:50 MWF</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="1-2:20 TTh">1-2:20 TTh</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="12-12:50 MWF">12-12:50 MWF</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="2:30-3:50 TTh">2:30-3:50 TTh</Nav.Link></Nav.Item>
      </Nav>
      <h4>Filter by Department </h4>
      <Nav onSelect={selectFilterType} className="flex-column">
        <Nav.Item><Nav.Link eventKey="All">No Filter</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="Computer Science">Computer Science</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="Music">Music</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="Applied Math">Applied Math</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="Biology">Biology</Nav.Link></Nav.Item>
      </Nav>
      <h4>Sort by:</h4>
      <Nav onSelect={selectSort} className="flex-column">
        <Nav.Item><Nav.Link eventKey="No Sort">No Sort</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="Enrollment Numbers">Enrollment Numbers</Nav.Link></Nav.Item>
      </Nav>
      <h3>Cart: </h3>
      <h4>Total: {totalClassTime()} minutes</h4>
      {cartItems.map((item,index)=>(<p>{item.class}, {item.mins} minutes </p>))}
      <Button onClick={() =>{emptyCart()}}> Empty Cart</Button>
      </div>
      <div class="item" id="dataPoints">
     
      { setSort()}
      {doublyFilteredData.map((item, index) => (
        <ClassItem item = {item} setCartItems={setCartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;
