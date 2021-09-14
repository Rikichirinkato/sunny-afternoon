import styled from 'styled-components';

const Slider = styled.div`
    width: 100%;
    height: 100px;

    & .rec-carousel-wrapper {
        height: 50px;

        .rec-carousel {
            height: 50px !important; // I'm sorry for this
            
            button {
                border-radius: 2px;

                &:hover {
                    background-color: rgb(55, 79, 215);
                }
                
                &:disabled {
                    cursor: default;
                }
            }
        }
    }

    & .rec-pagination {
        display: none;
    }
`

const Header = styled.h1`
    font-size: 20px;
    color: rgb(255, 255, 255);
    margin: 10px;
`;

const AprovedImage = styled.div`
    width: 70px;
    height: 50px;
    margin-right: 5px;
    border-radius: 2px;
    background-image: url(${props => props.backgroundImage});
    background-position: center;
    background-size: 100% auto;
`;


const ApprovedStyles = {
    Slider,
    Header,
    AprovedImage,
}

export default ApprovedStyles;
