import Header from './Header';
import Nav from './Nav';
import Head from 'next/head';
export default ({Title, Descr})=>{
    return(
        <>
        <Head>
            <meta charSet="UTF-8" />
            <title>{Title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Welkom op de site van Studio Tibo, jouw polyvalente tekenaar! Bekijk hier het uitgebreide portfolio van Tibo!" />
            
        </Head>
        <Nav />
        <Header Title={Title} Descr={Descr} />
        </>
    )
}