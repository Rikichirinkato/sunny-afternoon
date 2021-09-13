import './App.css';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import RandomImageComponenet from './components/random-image/random-image.component';
import ApprovedImages from './components/approved-images/approved-images.component';
import { connect } from 'react-redux';

function App(params) {
    let [url, setUrl] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    const approved = params.currentStore.imageReducer.approved;
    const rejected = params.currentStore.imageReducer.rejected;
    const endpoint = 'https://api.unsplash.com/photos/random/?client_id=Byd4R0--txY1qSmiK_hAVgNooi7bAW3NbxN2lFOfcyE';

    const getNewImageFromApi = () => {
        fetch(endpoint)
            .then(resp => resp.json())
            .then(resp => {
                if (approved.includes(resp.urls.regular) || rejected.includes(resp.urls.regular)) {
                    return getNewImageFromApi();
                }
                setUrl(url = resp.urls.regular);
                setIsLoading(isLoading = false);
            })
            .catch(err => {
                console.log('Oops!...I did it again', err);
                setIsLoading(isLoading = false);
            });
    }

    const getNewImage = () => {
        setIsLoading(isLoading = true);
        getNewImageFromApi();
    }

    const actionButtonClick = (action, url) => {
        if (!url) {
            return;
        }
        setIsLoading(isLoading = true);
        params[action](url);
        getNewImageFromApi();
    }

    return (
        <div className='main'>
            <ApprovedImages approved={approved} />
            <RandomImageComponenet url={url} emit={getNewImage}/>
            <div className='action-btn'>
                <Button
                    variant='contained'
                    className='reject'
                    disabled={isLoading}
                    onClick={() => actionButtonClick('onReject', url)}
                ></Button>
                <Button
                    variant='contained'
                    color='primary'
                    className='approve'
                    disabled={isLoading}
                    onClick={() => actionButtonClick('onApprove', url)}
                ></Button>
            </div>
        </div>
    );
}

export default connect(
    state => ({
        currentStore: state
    }),
    dispatch => ({
        onApprove: newImageUrl => {
            dispatch({ type: 'APPROVED', url: newImageUrl })
        },
        onReject: newImageUrl => {
            dispatch({ type: 'REJECTED', url: newImageUrl })
        }
    })
)(App);
