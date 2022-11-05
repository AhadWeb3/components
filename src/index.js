import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const card1 ={
  image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  nameS: 'Tahsin Ahmed',
  position: 'CO-FOUNDER AND CEO',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nesciunt.',
};
const card2 ={
  image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  nameS: 'Fabiha Bushra Fatema',
  position: 'CO-FOUNDER AND CEO',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nesciunt.',
};
const card3 ={
  image: "https://images.unsplash.com/photo-1642792735536-b6f7ef18b918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  nameS: 'MD Alamgir Hossen',
  position: 'CO-FOUNDER AND CEO',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nesciunt.',
};
const card4 ={
  image: "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  nameS: 'Ms Tzkia Fabiha',
  position: 'CO-FOUNDER AND CEO',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nesciunt.',
};
const card5 ={
  image: "https://images.unsplash.com/photo-1638493489135-34bf34dd320b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  nameS: 'Kowkob Tawsif',
  position: 'CO-FOUNDER AND CEO',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nesciunt.',
};
const card6 ={
  image: "https://images.unsplash.com/photo-1642790595397-7047dc98fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  nameS: 'Noor E Alhe',
  position: 'CO-FOUNDER AND CEO',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nesciunt.',
};

function Books() {
  return (
    <section className="container">
      <CardComponent
        image = {card1.image}
        nameS = {card1.nameS}
        position = {card1.position}
        desc = {card1.desc}
        >
      </CardComponent>
      <CardComponent
        image = {card2.image}
        nameS = {card2.nameS}
        position = {card2.position}
        desc = {card2.desc}
        >
      </CardComponent>
      <CardComponent
        image = {card3.image}
        nameS = {card3.nameS}
        position = {card3.position}
        desc = {card3.desc}
        >
      </CardComponent>
      <CardComponent
        image = {card4.image}
        nameS = {card4.nameS}
        position = {card4.position}
        desc = {card4.desc}
        >
      </CardComponent>
      <CardComponent
        image = {card5.image}
        nameS = {card5.nameS}
        position = {card5.position}
        desc = {card5.desc}
        >
      </CardComponent>
      <CardComponent
        image = {card6.image}
        nameS = {card6.nameS}
        position = {card6.position}
        desc = {card6.desc}
        >
      </CardComponent>
    </section>
  );
};
const CardComponent = ({image, nameS, position, desc}) =>{
  return(
  <div className="card ">
    <div className="headshot"><img src={image} alt="" /></div>
    <div className="card-content">
      <h2>{nameS}</h2>
      <p className="title">{position}</p>
      <p>{desc}</p>
      <div className="socials">
        <img src="https://img.icons8.com/ios-glyphs/512/instagram-new.png" alt="decorative" />
        <img src="https://img.icons8.com/ios-glyphs/512/facebook.png" alt="decorative" />
        <img src="https://img.icons8.com/ios-glyphs/512/twitter.png" alt="decorative" />
      </div>
    </div>
  </div>
  )
}
ReactDOM.render(<Books />, document.getElementById("root"));
