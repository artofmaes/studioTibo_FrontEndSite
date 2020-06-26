import Layout from '../components/Layout';
import Footer from '../components/Footer';
import axios from 'axios';
import {useState} from 'react';
import Masonry from 'react-masonry-css';
const breakpointColumnsObj = {
  default: 6,
  1100: 3,
  700: 2,
  500: 1
};


export default ({postData, sections, events})=>{
    
    return(
        <>
        <Layout Title="Studio Tibo" Descr="Jouw polyvalente tekenaar!"/>
        
        <section id="section-one">
        <h2>Mijn recente Instagramposts</h2>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {postData.posts.map(post =>{
                    return(
                        <div key={post.id}><a href={post.url} target="_blank" ><img src={post.imageUrl}/></a></div>
                    )
                })}
            </Masonry>
        </section>
       {sections.map(section =>{
           return(
            <section id={section.naam} key={section.naam}>
            <h2>{section.h1Titel}</h2>
            <div className="items">
                {section.textfield.map(text =>{
                    return(
                        <div className="item" key={text.title}>
                            <span className="fa fa-pencil"></span>
                            <h3>{text.title}</h3>
                            <div className="text" dangerouslySetInnerHTML={{__html: text.tekst}}/>
                            <a className="button" href={text.link}>Meer info</a>
                        </div>
                    )
                })}
            </div>
            </section>
           )
       })}
        <section id="section-three">
            <h2>Opkomende Evenementen</h2>
            <div className="events">
                {events.map(event =>{
                    return(
                        <div className="nice" key={event.naam}>
                            <h3>{event.naam}</h3>
                            <p>{event.beschrijving}</p>
                            <img src={`https://wdev.be/wdev_jordi/eindwerk/image.php?test.jpg&width=250&height=400&image=/wdev_jordi/eindwerk/assets/images/${event.img}`} />
                            <a href={event.link} target="_blank" title="Ontdek hier meer!" className="button2">Meer info</a>

                        </div>
                    )
                })}       
            </div>
        </section>
        <Footer />

        </>
    )
}

export async function getStaticProps(){
    const userInstagram = require("user-instagram");
    const postData = await userInstagram("studiotibo");
    const res = await axios.get('https://wdev.be/wdev_jordi/eindwerk/api/sections?pagina=6');
    const sectionData = res.data['hydra:member']
    const res2 = await axios.get('https://wdev.be/wdev_jordi/eindwerk/api/events');
    const eventData = res2.data['hydra:member'];

    return {
        props:{
            postData: postData,
            sections: sectionData,
            events: eventData
        }
    }
}
