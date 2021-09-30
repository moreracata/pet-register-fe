import './CrazyButton.css';
export default function CrazyButton(props: crazyButtonProps){
      
    return (
    <>
    <div className="wrapper">
            <a className="crazy-button" 
               type={props.type} 
               href={ props.url  ? props.url : "/" }
               onClick={props.onClick}
      
            >{props.children}</a>
    </div>

        <svg className="custom-btn"  width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>

    </>
    )
}



interface crazyButtonProps{
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled: boolean;
    url?:string
    
}
  
  CrazyButton.defaultProps = {
    type: "button",
    disabled: false,
    url:"/"
  }