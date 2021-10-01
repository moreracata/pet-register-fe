import CarouselOption  from "./CarouselOption";
import cat from './img/gato.png';
import collar from './img/collar.png';
import huella from './img/huella.png';
import './carousel.css';
import { useEffect, useState } from 'react';

import { landingOptionDTO } from "./landingPage.model";

export default function Carousel(props: carouselProps){

    const [current, setCurrent] = useState([ 
         { id:1, image: cat, tag: 'OPCION1'}, 
         { id:2, image: huella, tag: 'OPCION2' }, 
         { id:3, image: collar, tag: 'OPCION3' }]
        );


    const options: landingOptionDTO[] = [
        { id:0, image: 'https://cdn-icons-png.flaticon.com/512/4213/4213714.png', tag: 'OPCION0'},
        { id:1, image: cat, tag: 'OPCION1'}, 
        { id:2, image: huella, tag: 'OPCION2' }, 
        { id:3, image: collar, tag: 'OPCION3' },
        { id:4, image: cat, tag: 'OPCION4'}, 
        { id:5, image: huella, tag: 'OPCION5' }, 
        { id:6, image: collar, tag: 'OPCION6' },
        { id:7, image: cat, tag: 'OPCION7'}, 
        { id:8, image: huella, tag: 'OPCION8' }, 
        { id:9, image: collar, tag: 'OPCION9' },
        { id:10, image: cat, tag: 'OPCION10'}, 
        { id:11, image: huella, tag: 'OPCION11' }, 
        { id:12, image: collar, tag: 'OPCION12' },
        
    ]

    useEffect(() => {
    });

    const moveToLeft = () => {
        console.log(current)
        let left = current[0].id
        if(left != 0){
           var newCurrent = [options[left+1],options[left+2],options[left+3]]
           setCurrent(newCurrent)
           console.log(newCurrent)
        }
    }

    const moveToRight = () => {
        console.log(current)
        let right = current[3].id
        if(right != options.length-1){
           var newCurrent = [options[right-1],options[right-2],options[right-3]]
           setCurrent(newCurrent)
        console.log(newCurrent)
        }
    }

    const onclickOption = () => {console.log("Cata")}
    
    return (
        <> 
            <div className=" form-container">  
                <div className="custom-carousel">  
                    <div className="row"> 
                        <div className="col-1"> 
                            <a className="arrow prev" onClick={moveToLeft}>&#10094;</a>
                        </div>
                        <div className="col-10"> 
                                <div className="custom-carousel-options">  
                                    <CarouselOption custoClassName="left opt " onClick={onclickOption} option={options[0]} key={options[0].id} />
                                    <CarouselOption custoClassName="center opt" onClick={onclickOption} option={options[1]} key={options[1].id} />
                                    <CarouselOption custoClassName="right opt " onClick={onclickOption} option={options[2]} key={options[2].id} />
                                </div>
                            </div>
                        <div className="opt col-1"> 
                            <a className="arrow prev" onClick={moveToLeft}>&#10094;</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        
}
 

interface carouselProps{
    options?: landingOptionDTO[];
}