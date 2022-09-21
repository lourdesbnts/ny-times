import React from "react";
import ArticleCard from "./ArticleCard";

const Homeview = ({ articles }) => {
  // console.log(articles)
  const articleCards = articles.map((article) => {
    console.log(article)
    return (
    <>
     <ArticleCard 
        key={article.uri}
        id={article.uri}
        title={article.title}
        multimedia={article.multimedia[0].url}
     />
    </>
    )
  })
  return (
    <>
      <section>{articleCards}</section>
    </>
  )
}

export default Homeview;