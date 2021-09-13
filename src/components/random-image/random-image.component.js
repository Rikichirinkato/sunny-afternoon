import './random-image.component.css';

function RandomImageComponenet({ url, emit }) {
    return (
        <div className='random-img-container'>
            {
                url
                    ? <img className='random-img' src={url} alt=''></img>
                    : <div className='empty-state' onClick={emit}></div>}
        </div>
    )
}

export default RandomImageComponenet;
