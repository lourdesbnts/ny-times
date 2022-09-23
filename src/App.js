import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import getArticles from './apiCall';
import ArticleDetails from './components/ArticleDetails';
import Homeview from './components/Homeview';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
    .then(data => {
      setArticles(data.results)
    })
  }, [])


  return (
    <main>
    <Homeview articles={articles}/>
    <Route exact path="/:title" render={({match}) => {
    return (
      <>
      {console.log(match.params.title)}
      <ArticleDetails title={match.params.title} articles={articles} />

      </>
    )}}/>
    </main>
  )
}

export default App;