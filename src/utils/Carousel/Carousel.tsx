import CarouselOption  from "./CarouselOption";
import './Style/Carousel.css';

import { useEffect, useState } from 'react';

import { CarouselOptionDTO } from "./Models/CarouselOptionDTO"

export default function Carousel(props: carouselProps){

    const [current, setCurrent] = useState(
            [ 
                { id:1, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193256.png', tag: 'OPCION1'}, 
                { id:2, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193260.png', tag: 'OPCION2' }, 
                { id:3, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193312.png', tag: 'OPCION3' }
            ]
        );


    const options: CarouselOptionDTO[] = [
        { id:0, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193375.png', tag: 'OPCION0'},
        { id:1, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193256.png', tag: 'OPCION1'}, 
        { id:2, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193260.png', tag: 'OPCION2' }, 
        { id:3, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193312.png', tag: 'OPCION3' },
        { id:4, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193308.png', tag: 'OPCION4'}, 
        { id:5, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193288.png', tag: 'OPCION5' }, 
        { id:6, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193354.png', tag: 'OPCION6' },
        { id:7, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193310.png', tag: 'OPCION7'}, 
        { id:8, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193251.png', tag: 'OPCION8' }, 
        { id:9, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193243.png', tag: 'OPCION9' },
        { id:10, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193285.png', tag: 'OPCION10'}, 
        { id:11, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193351.png', tag: 'OPCION11' }, 
        { id:12, image: 'https://cdn-icons-png.flaticon.com/512/4193/4193347.png', tag: 'OPCION12' },
        
    ]

    useEffect(() => {
    });

    const moveToLeft = () => {
        let left = current[0].id
        let right = current[2].id
        
            if( current[0].id != 0){
           var newCurrent = [options[right-3],options[right-2],options[right-1]]
           setCurrent(newCurrent)
        }
    }

    const moveToRight = () => {
        
        let left = current[0].id
        let right = current[2].id
       
        if(right != options.length-1){
            var newCurrent = [options[left+1],options[left+2],options[left+3]]
           setCurrent(newCurrent)
        }
    }

    const onclickOption = () => {console.log("'../img/gato.png'a")}
    
    return (
        <> 
            <div className="custom-carousel">  
                <div className="row"> 
                    <div className="col-1"> 
                        <a className="prev" onClick={moveToLeft}>&#10094;</a>
                    </div>
                    <div className="col-10"> 
                            <div className="custom-carousel-options">  
                                <CarouselOption custoClassName="left" onClick={onclickOption} option={current[0]} key={current[0].id} />
                                <CarouselOption custoClassName="center" onClick={onclickOption} option={current[1]} key={current[1].id} />
                                <CarouselOption custoClassName="right" onClick={onclickOption} option={current[2]} key={current[2].id} />
                            </div>
                        </div>
                    <div className="opt col-1"> 
                        <a className="next" onClick={moveToRight}>&#10095;</a>
                    </div>
                </div>
            </div>   
        </>
    )
        
}
 

interface carouselProps{
    options?: CarouselOptionDTO[];
}