import styled  from 'styled-components';
import {ContentSection} from './containers';

// MODAL------------------------------------------------------------------------
export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const ModalContent = styled(ContentSection)`
    // background-color: white;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 90%;
    @media only screen and (min-width: 48em) {
        max-width: 500px;
    }
`;
export const ModalInput = styled.input`
    width: 90%;
    height 40px;
    line-height: 40px;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
`;
export const ModalLabel = styled.label`
    width: 90%;
    height 16px;
    line-height: 16px;
    color: #444444;
    font-size: 14px;
`;