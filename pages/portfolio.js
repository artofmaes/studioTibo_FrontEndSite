import Layout from '../components/Layout';
import Footer from '../components/Footer';
import axios from 'axios'
import {useState} from "react";
import Masonry from 'react-masonry-css';
const breakpointColumnsObj = {
  default: 6,
  1100: 3,
  700: 2,
  500: 1
};

export default ({categories, comics, illustraties, ontwerpen})=>{
  const [showCat1, setShowCat1] = useState(false);
  const [showCat2, setShowCat2] = useState(false);
  const [showCat3, setShowCat3] = useState(false);
  
  const toggleCat1 = () =>{
    setShowCat2(false);
    setShowCat3(false)
    setShowCat1(!showCat1);
  }
  const toggleCat2 = () =>{
    setShowCat1(false);
    setShowCat3(false)
    setShowCat2(!showCat2);
  }
  const toggleCat3 = () =>{
    setShowCat1(false);
    setShowCat2(false)
    setShowCat3(!showCat3);
  }

    return(
        <>
        <Layout Title="Tibo's Portfolio" Descr="En zijn fantastische werken!"/>
        <section id="section-eleven">
          <h2>Mijn collecties!</h2>
          <p className="introtekstje">Wil je weten wat ik in petto heb? klik dan gauw op deze categorieën om al mijn werkjes te bekijken!</p>
           <div className="container">
             <ul className="gridder">
             <li className="gridder-list list1">
                  <img src="./images/comics.jpg" onClick={toggleCat1}/>
                </li>
                <li className="gridder-list list2">
                  <img src="./images/illustraties.jpg" onClick={toggleCat2}/>
                </li>

                <li className="gridder-list list3">
                  <img src="./images/ontwerpen.jpg" onClick={toggleCat3}/>
                </li>
             </ul>
             <div className="gridder-show" style={{display: showCat1? "block":"none"}}>
             <h2>Comics</h2>
             <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {comics.map(comic =>{
                    return(
                        <div  key={comic.naam} ><a data-fancybox="comics" href={`https://wdev.be/wdev_jordi/eindwerk/assets/images/${comic.filename}`}><img src={`https://wdev.be/wdev_jordi/eindwerk/image.php?test.jpg&width=250&height=400&image=/wdev_jordi/eindwerk/assets/images/${comic.filename}`}/></a></div>
                    )
                })}
            </Masonry>
             </div>
             <div className="gridder-show" style={{display: showCat2? "block":"none"}}>
             <h2>Illustraties</h2>
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {illustraties.map(illustratie =>{
                        return(
                            <div key={illustratie.naam}><a data-fancybox="illustraties" href={`https://wdev.be/wdev_jordi/eindwerk/assets/images/${illustratie.filename}`}><img src={`https://wdev.be/wdev_jordi/eindwerk/image.php?test.jpg&width=250&height=400&image=/wdev_jordi/eindwerk/assets/images/${illustratie.filename}`}/></a></div>
                        )
                    })}
                </Masonry>
             </div>
             <div className="gridder-show" style={{display: showCat3? "block":"none"}}>
             <h2>Ontwerpen</h2>
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {ontwerpen.map(ontwerp =>{
                        return(
                            <div key={ontwerp.naam}><a data-fancybox="ontwerpen" href={`https://wdev.be/wdev_jordi/eindwerk/assets/images/${ontwerp.filename}`}><img src={`https://wdev.be/wdev_jordi/eindwerk/image.php?test.jpg&width=250&height=400&image=/wdev_jordi/eindwerk/assets/images/${ontwerp.filename}`}/></a></div>
                        )
                    })}
                </Masonry>
             </div>
           </div>
        </section>
        <Footer/>
        </>
    )
}

export async function getStaticProps(){
  const comics = await axios.get('https://wdev.be/wdev_jordi/eindwerk/api/works?category=4');
  const comicData = comics.data['hydra:member']
  const illustraties = await axios.get('https://wdev.be/wdev_jordi/eindwerk/api/works?category=5');
  const illustratieData = illustraties.data['hydra:member']
  const ontwerpen = await axios.get('https://wdev.be/wdev_jordi/eindwerk/api/works?category=6');
  const ontwerpData = ontwerpen.data['hydra:member']
  const res2 = await axios.get('https://wdev.be/wdev_jordi/eindwerk/api/categories');
  const catData = res2.data['hydra:member'];

  return {
      props:{
          categories: catData,
          comics: comicData,
          illustraties: illustratieData,
          ontwerpen: ontwerpData
      }
  }
}