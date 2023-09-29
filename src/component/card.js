import React from 'react'
import './CSS/Language.css'


export const Cards = (props) => {
  return (
    <div className="container-fluid">
      <div class="card" id="SkillCard">
        <center>
          <img
            id="cardImage"
            src={props.imgsrc}
            class="card-img-top"
            alt="..."
          />
        </center>
        <div class="card-body">
          <center>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.link} class="btn btn-primary">
            view
          </a>
          </center>
        </div>
      </div>
    </div>
  );
}
