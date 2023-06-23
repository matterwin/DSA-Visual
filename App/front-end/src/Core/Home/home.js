import "../../App.css"
import "./home.css"

import Filesys from './filesys';
import Readme from './readme';
import Extrainfo from './extrainfo';

function Home(){
    return (
        <div className="container">
            <div className="left-side-home">
                <Filesys />
            </div>
            <div className="center-side-home">
                <Readme />
            </div>
            <div className="right-side-home">
                <Extrainfo />
            </div>
        </div>
    );
}

export default Home;
