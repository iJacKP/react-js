import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return  <div>

  <h2>{props.name}</h2>
  <img className="pics"
    src={props.img}
    alt="avatar_img"
  />
  <p>{props.tel}</p>
  <p>{props.email}</p>
  </div>

}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card 
    name="Beyoncé"
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel="+85 985974561"
    email="queenb@mamae.com"
    
    />

    <Card 
    name="Mamacita"
    img="https://stc.ofuxico.com.br/img/upload/noticias/2021/04/29/karol-conka-documentario_402312_36.jpg"
    tel="+85 985648751"
    email="respeita@mamacita.com"
    
    />

    <Card 
    name="J Balvin"
    img="https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2020/04/j-balvin-colores.jpg"
    tel="+85 984204531"
    email="jbalvin@me.com"
    
    />

  </div>,
  document.getElementById("root")
);
