import RandomImageStyles from './RandomImageStyles';

function RandomImageComponenet({ url, emit }) {
    const { RandomImageContainer, RandomImage, EmptyState } = RandomImageStyles;
    return (
        <RandomImageContainer>
            {
                url
                    ? <RandomImage src={url} alt=''></RandomImage>
                    : <EmptyState onClick={emit}></EmptyState>}
        </RandomImageContainer>
    )
}

export default RandomImageComponenet;
