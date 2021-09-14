import ApprovedStyles from './ApprovedImagesStyles.component';
import Carousel from 'react-elastic-carousel';

function ApprovedImages({ approved }) {
    const { Slider, Header, AprovedImage } = ApprovedStyles;

    return (
        <Slider>
            <Header>Approved images ({approved.length})</Header>
            <Carousel itemsToShow={5} itemsToScroll={1}>
                {approved.map((itemApproved, index) => {
                    return (
                        <AprovedImage backgroundImage={itemApproved} alt='approved image' key={`approved${index}`}></AprovedImage>
                        )
                    })
                }
            </Carousel>
        </Slider>
    )
}

export default ApprovedImages;