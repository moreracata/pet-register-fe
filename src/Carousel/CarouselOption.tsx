
import { CarouselOptionDTO } from "./Models/CarouselOptionDTO"

export default function CarouselOption(props: carouselOptionProps){
      
    return (
        <>
            <div className={"index-option-img carousel-option row "+  props.custoClassName}>
                
                <img  className="carousel-option-img col-12" src={ props.option.image}/>     
                
            </div>
          
        </>
    )
}

interface carouselOptionProps{
    option: CarouselOptionDTO;
    custoClassName: string
    onClick(): void;
}
