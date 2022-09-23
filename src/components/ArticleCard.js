import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css"

const ArticleCard = ({ title, multimedia, id, date }) => {
  return (
    <Link to={`/${title}`} style={{textDecoration:'none', color:'black'}}>
      <section className="article-card">
        <img className="article-card-img" src={multimedia} alt={multimedia[0].caption}></img>
        <h2 className="article-card-title">{title}</h2>
        <p className="article-card-date">{date.slice(0, 10)}</p>
      </section>
    </Link>
  )
}

export default ArticleCard;