// import React, { useEffect, useState } from "react";
// import getArticles from './apiCall'; 
import "./ArticleDetails.css"

const ArticleDetails = ({ articles, title }) => {
  const findArticle = articles.find((article) => {
    return article.title === title
  })

  return (
    <div>
    {findArticle &&
      <div className="article-details">
        <h1 className="article-details-title">{findArticle.title}</h1>
        <img className="article-details-image" src={findArticle.multimedia[1].url} alt="pictu"></img>
        <p className="article-details-abstract">{findArticle.abstract}</p>
        <a className="article-details-link" href={findArticle.url}>Read More Here</a>
      </div>
    }
    </div>
  )
}

export default ArticleDetails;