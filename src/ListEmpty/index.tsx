import { Container, TextEmpty } from "./styles";

type props = {
    text: string;

};

export function ListEmpty({text}: props) {

    return (
        <Container>
            <TextEmpty>
                {text}
            </TextEmpty>
        </Container>
    );

};