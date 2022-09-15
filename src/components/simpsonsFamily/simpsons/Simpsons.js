import {simpsons} from "../data/data";
import Simpson from "../simpson/Simpson";

function Simpsons() {
    return (
        <div>
            {
                simpsons.map((simpson,index) => <Simpson key={index} simpson={simpson}/> )
            }
        </div>
    );
}

export default Simpsons;