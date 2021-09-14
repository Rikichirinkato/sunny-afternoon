import styled from 'styled-components';
import plus from '../../icons/plus.svg';

const RandomImageContainer = styled.div`
    width: 380px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
`;

const RandomImage = styled.img`
    max-width: 350px;
    max-height: 100%;
    background-position: center;
    background-size: 100% 100%;
    border-radius: 5px;
`;

const EmptyState = styled.div`
    width: 200px;
    height: 200px;
    background-color: rgb(240, 242, 247);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
`;

const RandomImageStyles = {
    RandomImageContainer,
    RandomImage,
    EmptyState
}

export default RandomImageStyles;
