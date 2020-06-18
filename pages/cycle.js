
import {useEffect, useRef} from 'react';



export default () => {
    const el = useRef();
    useEffect(() => {
        $(el.current)
        console.log($(el.current))
        $(el.current).backgroundCycle({
            imageUrls: [
                'images/1.jpg',
                'images/2.jpg',
                'images/3.jpg',
                'images/4.jpg',
                'images/strip30.jpg'
            ],
            fadeSpeed: 1000,
            duration: 3000,
            backgroundSize: SCALING_MODE_COVER
        });
        return () => {
            
        }
    }, [])
    return(
        <div ref={el} style={{height: "100vh"}} >
            test
        </div>
    );
}