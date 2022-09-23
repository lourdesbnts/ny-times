// import React, { useEffect, useState } from "react";
// import getArticles from './apiCall'; 

const ArticleDetails = ({ articles, title }) => {
  const findArticle = articles.find((article) => {
    return article.title === title
  })

  return (
    <>
    {findArticle &&
      <div className="article-details">
      {console.log(findArticle)}
        <h1 className="article-details-title">{findArticle.title}</h1>
        <p className="article-details-abstract">{findArticle.abstract}</p>
        <img className="article-details-image" src={findArticle.multimedia[1].url} alt="pictu"></img>
        <a className="article-details-link" href={findArticle.url}>Read More Here</a>
      </div>
    }
    </>
  )
}

export default ArticleDetails;