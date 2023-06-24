import "../../App.css"
import "./home.css"

import Filesys from './FileSys/filesys';
import Readme from './Readme/readme';
import Extra from './Extra/extra';

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
                <Extra />
            </div>
        </div>
    );
}

export default Home;
