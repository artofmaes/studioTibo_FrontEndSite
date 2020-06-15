import Header from './Header';
import Nav from './Nav';
export default ({Title, Descr})=>{
    return(
        <>
        <Nav />
        <Header Title={Title} Descr={Descr} />
        </>
    )
}