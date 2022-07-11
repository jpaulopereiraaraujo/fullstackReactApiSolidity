import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import axios from 'axios';


function NewsGeneral() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            const response = await axios.get("https://newsapi.org/v2/everything?q=crypto&from=2022-06-10&sortBy=publishedAt&apiKey=cab09dcd27c749179eb35a9fee2d5479");
            setNews(response.data.articles);
        };
        loadNews();
    }, []);

    console.log("news", news)

    return (
        <div className="App">

            {news && news.map((item, index) => {
                return (
                    <>

                        <div class="block is-justify-content-center is-align-self-center">



                            <Card
                                key={index}
                                hoverable
                                style={{ width: "70%" }}
                            >
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src={item.urlToImage} alt="Placeholder"></img>
                                        </figure>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-content">
                                        <h2> <strong> {item.title} </strong> </h2>
                                        <div class="content">
                                        {item.content} 
                                        </div>
                                    </div>
                                </div>


                                
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <Button className="button is-link" type="primary">Read More </Button>
                                </a>


                            </Card>

                        </div>

                    </>


                )
            })}

        </div>
    )
}

export default NewsGeneral;