import styled from 'styled-components';
import approve from './icons/approve.svg';
import reject from './icons/reject.svg';

const Main = styled.div`
    width: 435px;
    height: 620px;
    margin: auto;
    background-color: rgb(55, 79, 215);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
`;

const Buttons = styled.div`
    display: flex;
    flex-directoion: row;
    
    & button {
        margin: 0 5px;
        height: 40px;
        width: 64px;
        border-radius: 5px;
        border: 0;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
        display: ${props => props.display}
    }

    & button:active {
        box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
    }
`;

const Approve = styled.button`
    background-image: url(${approve});
`;

const Reject = styled.button `
    background-image: url(${reject});
`;

const Message = styled.div`
    width: 300px;
    display: ${props => props.display};
    text-align: center;
    color: rgb(255, 255, 255);
`

const AppStyles = {
    Main,
    Buttons,
    Approve,
    Reject,
    Message
}

export default AppStyles;
