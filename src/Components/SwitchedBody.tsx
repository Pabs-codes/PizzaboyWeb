
import BodyTwo from "./BodyTwo";
import ShoppingCart from "./ShopingCart";
import './BodyTwo.css'
import BodyThree from "./Bodythree";
// import BodyFour from "./BodyFour";

interface SwitchedBodyProps {
    index: number;
}

export default function SwitchedBody({ index }: SwitchedBodyProps) {

    const bodies = [
        <BodyTwo/>,
        <BodyThree/>,
        <BodyTwo/>,
        // <BodyFour/>,
    ];

    return (
        <div className="container">
            <div className="left-panel">
                {bodies[index]}
            </div>
            <div className="right-panel">
                <ShoppingCart/>
            </div>
        </div>
    )
}