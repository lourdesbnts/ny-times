import React, { useEffect, useState } from 'react';
import getArticles from './apiCall';
import Homeview from './components/Homeview';
// import Home from './components/Home'

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
    .then(data => {
      console.log(data.results)
      setArticles(data.results)
    })
  }, [])

  return (
    <>
      <Homeview articles={articles}/>
    </>
  )
}

export default App;