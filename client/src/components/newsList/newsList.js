import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './newsList.css';
import {useQuery} from '@apollo/client'
import { LOAD_NEWS } from '../../graphql/queries';

const NewsList = () => {
    const {error, loading, data} = useQuery(LOAD_NEWS)
    //const [sortedNews, setSortedNews] = useState([])


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

   // const sortedNews  = sortedNews.slice().sort((a, b) => b.data.getNews.createdAt- a.data.getNews.createdAt)

  return (
    <div className="newsList">
        {data.getNews.map((n) => (
            <div className="newsArticle" key={n._id}>
                <img src="./assets/news/mudavadi.png" alt="mudavadi" />
                <div className="details">
                    <h3>{n.headline}</h3>
                    <p>
                        Leaders of the Kenya Kwanza Alliance have asked 
                        the Government to stop intimidation tactics on 
                        top members of the alliance and parties ahead of 
                        the August 9, elections. Reacting a day after 
                        the police announced...
                        <span>
                            <Link to={`/article/${n._id}`}>Read more</Link>
                        </span>
                    </p>
                    <div>
                        <h5>by: Brian Oruta</h5>
                        <small>2hrs ago</small>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NewsList