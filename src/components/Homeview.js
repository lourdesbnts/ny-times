import React from "react";
import ArticleCard from "./ArticleCard";
import "./Homeview.css"

const Homeview = ({ articles }) => {
  const articleCards = articles.map((article) => {
    console.log(article)
    return (
    <>
     <ArticleCard 
        key={article.uri}
        id={article.uri}
        multimedia={article.multimedia[0].url}
        title={article.title}
     />
    </>
    )
  })
  return (
    <>
      <h1 className="ny-times-header">NY Times Top Stories</h1>
      <section className="homeview">{articleCards}</section>
    </>
  )
}

export default Homeview;