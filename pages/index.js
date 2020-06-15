import Layout from '../components/Layout';
import axios from 'axios';
import {useState} from 'react';
import Masonry from 'react-masonry-css';
const breakpointColumnsObj = {
  default: 6,
  1100: 3,
  700: 2,
  500: 1
};


export default ({postData})=>{
    
    console.log(postData.posts)
    return(
        <>
        <Layout Title="Studio Tibo" Descr="Jouw polyvalente tekenaar!"/>
        
        <section id="section-one">
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {postData.posts.map(post =>{
                    return(
                        <div key={post.id}><a href={post.url} target="_blank" ><img src={post.imageUrl}/></a></div>
                    )
                })}
            </Masonry>
        </section>
       
        <section id="section-three">
            <h2 className="wow fadeInUp">Opkomende Evenementen</h2>
            <div className="events">
                       
            </div>
        </section>


        </>
    )
}

export async function getServerSideProps(){
    const userInstagram = require("user-instagram");
    const postData = await userInstagram("studiotibo");
    

    return {
        props:{
            postData
        }
    }
}