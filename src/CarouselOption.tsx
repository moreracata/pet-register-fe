
import { landingOptionDTO } from "./landingPage.model";

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
    option: landingOptionDTO;
    custoClassName: string
    onClick(): void;
}
