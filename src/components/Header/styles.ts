import styled from "styled-components/native";
import {CaretLeft} from 'phosphor-react-native'

export const Container = styled.View`
    width: 100%;
    flex:1;
    flex-direction: row;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackIcon = styled(CaretLeft)``;
