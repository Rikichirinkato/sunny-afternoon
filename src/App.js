import { useState } from 'react';
import RandomImageComponenet from './components/random-image/RandomImage';
import ApprovedImages from './components/approved-images/ApprovedImages';
import { connect } from 'react-redux';
import AppStyles from './AppStyles';

function App(params) {
    let [url, setUrl] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    const approved = params.currentStore.imageReducer.approved;
    const rejected = params.currentStore.imageReducer.rejected;
    const endpoint = 'https://api.unsplash.com/photos/random/?client_id=Byd4R0--txY1qSmiK_hAVgNooi7bAW3NbxN2lFOfcyE';
    const { Main, Buttons, Approve, Reject, Message } = AppStyles;

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
        <Main>
            <ApprovedImages approved={approved} />
            <RandomImageComponenet url={url} emit={getNewImage}/>
            <Buttons display={!!url ? 'block' : 'none'}>
                <Message display={!url ? 'block' : 'none'}>
                    Click on the + in order to get image recommendations
                </Message>
                <Reject
                    variant='contained'
                    disabled={isLoading}
                    onClick={() => actionButtonClick('onReject', url)}
                ></Reject>
                <Approve
                    variant='contained'
                    color='primary'
                    disabled={isLoading}
                    onClick={() => actionButtonClick('onApprove', url)}
                ></Approve>
            </Buttons>
        </Main>
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
