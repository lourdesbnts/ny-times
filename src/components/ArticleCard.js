import React from "react";
import "./ArticleCard.css"

const ArticleCard = ({ title, multimedia }) => {
  return (
    <section className="article-card">
      <img className="article-card-img" src={multimedia} alt={multimedia[0].caption}></img>
      <h2 className="article-card-title">{title}</h2>
    </section>
  )
}

export default ArticleCard;