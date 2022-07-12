import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import axios from 'axios';


function BNews() {
    const [news, setNews] = useState([]);


    useEffect(() => {
        const loadNews = async () => {
            const options = {
                method: 'GET',
                url: 'https://bing-news-search1.p.rapidapi.com/news/search',
                params: {
                  q: 'crypto',
                  freshness: 'Day',
                  originalImg: 'true',
                  textFormat: 'Raw',
                  safeSearch: 'Strict'
                },
                headers: {
                  'X-BingApis-SDK': 'true',
                  'X-RapidAPI-Key': 'a28af60bdbmshbdea123d5772a80p1569b3jsna745cfce9537',
                  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                }
              };
            const response = await axios.request(options);
            setNews(response.data.value);
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
                                            <img src={item.image.contentUrl} alt="Placeholder"></img>
                                        </figure>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-content">
                                        <h2> <strong> {item.name} </strong> </h2>
                                        <div class="content">
                                        {item.description} 
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

export default BNews;