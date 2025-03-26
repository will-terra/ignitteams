import styled from "styled-components/native";



export const Container = styled.View`
  flex: 1;
  gap: 16px;
    flex-direction: row;
  
  
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: '#fff',
    selectionColor: '#fff'
})`
    flex: 1;
    max-height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding-left: 16px;
`;

