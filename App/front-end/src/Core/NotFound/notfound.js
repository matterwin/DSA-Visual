import Divider from '@mui/material/Divider';
import './notfound.css'

function Notfound() {

    const handleReturnToHome = () => {
        window.location.href = '/';
    };

    return (
    <div className="nf-container">
        <div className='msg-container'>
            <h1 className='msg'>404</h1>
            <Divider orientation="vertical" style={{ backgroundColor: '#8f8f8f', height: '38px', width:'1px' }} />
            <h1 className='goback'>Page not found :(</h1>
        </div>
        <button className='not-found-btn'onClick={handleReturnToHome}>
            Return to Home
        </button>
    </div>
    );
}

export default Notfound