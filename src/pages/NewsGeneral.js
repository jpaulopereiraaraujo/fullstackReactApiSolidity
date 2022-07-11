import React, { useState, useEffect } from "react";
import {Card, Button} from 'antd';
import axios from 'axios';



const {Meta} = Card;

function NewsGeneral() {
    const[news, setNews] = useState([]);
    
    useEffect(() => {
        const loadNews = async () => {
            const response = await axios.get("https://newsapi.org/v2/everything?q=crypto&from=2022-06-10&sortBy=publishedAt&apiKey=cab09dcd27c749179eb35a9fee2d5479");
            setNews(response.data.articles);
        };
        loadNews();
    }, []);

    console.log("news",news)
    
    return (
        <div className ="App">

        {news && news.map((item, index) => {
            return(
                <Card
                key = {index}
                hoverable
                style = {{width: "70%"}}
                cover={<img alt="img" src={item.urlToImage}></img>}
                >


                    <Meta title = {item.title} description ={item.content}/>
                    <Button type="primary">Re </Button>

                </Card>

            )
        })}
        
        </div>
    )
}

export default NewsGeneral;