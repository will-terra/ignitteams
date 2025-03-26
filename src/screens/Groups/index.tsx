import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from 'src/ListEmpty';
import { Button } from '@components/Button';
import { MainInput } from '@components/MainInput';


export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);
  const [inputOpened, setInputOpened] = useState(false);
  const handleMainInput = (valueInput: string) => {
    setInputOpened(false);
    setGroups([...groups, valueInput]);
  }
  return (
    <Container>

      <Header />

      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma '

      />
      {inputOpened ? <MainInput onPress={handleMainInput} /> : <> </>}

      <FlatList

        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (

          <GroupCard

            title={item}

          />

        )}

        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty text='Nenhuma turma encontrada' />}

      />
      <Button type='PRIMARY'
        title='Criar nova turma '
        onPress={() => { setInputOpened(true) }}
      />


    </Container>
  );
}

