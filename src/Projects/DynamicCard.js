import React,{useState} from 'react';
import {Card} from "react-bootstrap";
import "./DynCard.css";

 function DynamicCard(props) {
     const [cards, setcard] = useState([
     {title:"CALM ME LAVANDER",
     text:"This lavender bar is a a bubble of beauty and purity! Grab one for yourself to experience a burst Of freshness.✨"},
     {title:"NAUGHTY ORANGE",
     text:"Reveal beautiful glowing skin with the naughtiness of citric filled bars called the Naughty Orange.Experience What magic feels like!😇"},
     {title:"SASSY CHARCOAL",
     text:"Our Sassy Charcoal Soap is formulated for oily facial skin. The combination of charcoal and tea tree essential oil leaves the skin feeling clean and refreshed.😊"},
     {title:"CREAMY COFFEE",
     text:"The natural touch of Coffee brew with Cinnamon essential oil will pamper your skin with natural treats!!You’re already beautiful inside, give your skin a chance..⚡"}]);

     const rendercard =(cards,index)=>{
         return (
            <Card style={{ width: '18rem' }}  key="index" classname="box"> 
            <Card.Img variant="top" src={cards.image}/>
            <Card.Body>
            <Card.Title>{cards.title}</Card.Title>
            <Card.Text>
            {cards.text}
           </Card.Text>
            </Card.Body>
             </Card>
         )
     }
    return (
        <div className="grid">
            {cards.map(rendercard)}
          
        </div>
    )
}

export default  React.memo(DynamicCard);