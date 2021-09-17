import RandomImageStyles from './RandomImageStyles';

function RandomImageComponenet({ url, emit }) {
    const { RandomImageContainer, RandomImage, EmptyState } = RandomImageStyles;
    return (
        <RandomImageContainer>
            {
                url
                    ? <RandomImage data-testid='random-picture' src={url} alt=''></RandomImage>
                    : <EmptyState data-testid='empty-state' onClick={emit}></EmptyState>}
        </RandomImageContainer>
    )
}

export default RandomImageComponenet;
