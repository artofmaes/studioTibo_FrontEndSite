import Link from 'next/link';

export default ()=>{
    return(
        <>
        <h1>Home</h1>
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/workshops"><a>Workshops</a></Link>
        <Link href="/"><a>Home</a></Link>
        <p>Banaan</p>
        </>
    )
}