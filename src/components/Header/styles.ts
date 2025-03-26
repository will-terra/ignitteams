import  styled  from "styled-components/native"; 
import {CaretLeft} from 'phosphor-react-native'


export const Container = styled.View`
width: 100%;
padding-top: 20px;

flex-direction: row;
align-items: center;
justify-content: center;
`; 

export const Logo = styled.Image`
width: 46px;
height: 55px;


`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
    size:32,
    color: theme.COLORS.WHITE
}))`

`;

export const BackButton = styled.TouchableOpacity`
flex: 1;
`;



