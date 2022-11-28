import './ClassItem.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function ClassItem(props){
  
  
    return(
        <div className="ClassItem">
            <h3>Class: {props.item.class}</h3>
            <p>Name: {props.item.name}</p>
            <p>Department: {props.item.department}</p>
            <p>Time: {props.item.time}</p>
            <p>Minutes Per Week: {props.item.mins}</p>
            <p>Enrollment: {props.item.enrollment}</p>
            <p>Professor: {props.item.professor}</p>
            <img src={props.item.image}></img>
            <Button onClick={()=>{props.addToCart(props.item)}}>Add To Cart</Button>
            <Button onClick={()=> {props.removeFromCart(props.item)}}>Remove From Cart</Button>
            {/* <ButtonGroup>
                {radios.map((radio, idx) =>(
                    <ToggleButton
                    key = {idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant = {idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="radio"
                    value= {radio.value}
                    checked={radioValue === radioValue}
                    onChange = {(e) => onCall(e)}>
                        {radio.thing}
                    </ToggleButton>
                )) }
            </ButtonGroup> */}
        </div>
    )

}

export default ClassItem;