import React from "react";
import { Link, Route } from 'react-router-dom';
import ArticleCard from "./ArticleCard";
import "./Homeview.css"

const Homeview = ({ articles }) => {
  const articleCards = articles.map((article) => {
    // console.log(article)
    return (
     <ArticleCard 
        key={Math.random()}
        id={article.uri}
        multimedia={article.multimedia[0].url}
        title={article.title}
        date={article.published_date}
     />
    )
    
  })

  const newArry = [...articles];

  const oldToNew = newArry.sort((a, b) => {
    const date1 = new Date(a.published_date)
    const date2 = new Date(b.published_date)
   return date1 - date2
  }).map((article) => {
    return (
      <ArticleCard 
         key={Math.random()}
         id={article.uri}
         multimedia={article.multimedia[0].url}
         title={article.title}
         date={article.published_date}
      />
     )
  })

  const newToOld = newArry.sort((a, b) => {
    const date1 = new Date(a.published_date)
    const date2 = new Date(b.published_date)
   return date2 - date1
  }).map((article) => {
    return (
      <ArticleCard 
         key={Math.random()}
         id={article.uri}
         multimedia={article.multimedia[0].url}
         title={article.title}
         date={article.published_date}
      />
     )
  })

  return (
    <div className="homeview-container">
    {console.log(oldToNew)}
    <Link to="/" style={{textDecoration:'none', color:'black'}}>
      <h1 className="ny-times-header">NY Times Top Stories</h1>
    </Link>
      <Link to='/old'>
        <button className="buttons">old-new</button>
      </Link>
      <Link to='/new'>
        <button className="buttons">new-old</button>
      </Link>
      <Route exact path="/">
        <section className="homeview">{articleCards}</section>
      </Route>
      <Route exact path='/old'>{oldToNew}</Route>
      <Route exact path='/new'>{newToOld}</Route>
    </div>
  )
}

export default Homeview;