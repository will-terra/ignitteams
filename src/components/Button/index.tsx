import { TouchableOpacityProps } from "react-native";
import { Container, Title, Variant } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title: string;
    type?: Variant;
    styles?: string;
}
export function Button({ styles, title, type = 'PRIMARY', ...rest }: ButtonProps) {
    return (
        <Container styles={styles} type={type}            {...rest}>
            <Title>{title}</Title>
        </Container>
    );

};