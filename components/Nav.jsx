import Link from 'next/link';


export default () =>{

    function openNav() {
    document.getElementById("mySidenav_sc").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav_sc").style.width = "0";
    }

    return(
        <>
        <div id="mySidenav_sc" className="sidenav">
            <div className="closebtn">
                <span onClick={closeNav} className="fa fa-close close"></span>
            </div>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>Over Tibo</a></Link></li>
            <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
            <li><Link href="/workshops"><a>Workshops</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </div>
        <div className="navbtn">
            <span onClick={openNav} className="fa fa-bars open"></span>
        </div>
        </>
    )
}