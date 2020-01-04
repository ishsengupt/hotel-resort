import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title: "free cocktails",
                info : 'This that those these maw mow'
            },
            {
                icon:<FaHiking/>,
                title: "free hiking",
                info : 'This that those these maw mow'
            },
            {
                icon:<FaShuttleVan/>,
                title: "free shuttle",
                info : 'This that those these maw mow'
            },
            {
                icon:<FaBeer/>,
                title: "free beer",
                info : 'This that those these maw mow'
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" className="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return (
                            <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>

        );
    }
}
