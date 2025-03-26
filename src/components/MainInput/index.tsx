
import { Button } from "@components/Button";
import { Container, TextInput } from "./styles";
import { useState } from "react";


type MainInputProps = {
    onPress?: (valueInput: string) => void;
}


export function MainInput({ onPress }: MainInputProps) {
    const handleOnPress = (valueInput: string) => {
        if (onPress) {
            onPress(valueInput);
        }
    }
    const [valueInput, setValueInput] = useState('');

    return (
        <Container>
            <TextInput value={valueInput} onChangeText={setValueInput} placeholder="Digite a turma " />
            <Button onPress={() => handleOnPress(valueInput)} title="+ " styles={'max-width: 60px'} />
        </Container>
    )
}