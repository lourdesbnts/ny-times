import React from "react";

const ArticleCard = ({ title, multimedia }) => {
  return (
    <section>
      <h2>{title}</h2>
      <img src={multimedia} alt={multimedia[0].caption}></img>
    </section>
  )
}

export default ArticleCard;