import './approved-images.component.css';
import { Button } from '@material-ui/core';

function ApprovedImages({ approved }) {
    return (
        <div className={'approved-container ' +  (approved && approved.length ? '' : 'hidden')}>
            <Button className='button left'></Button>
            <div className='approved-images-container'>
                {approved.map((itemApproved, index) => {
                    return (
                        <img className='aproved-img' src={itemApproved} alt='' key={`approved${index}`}></img>
                    )
                })}
            </div>
            <Button className='button right'></Button>
        </div>
    )
}

export default ApprovedImages;