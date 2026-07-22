import { ScrollView, Image } from 'react-native';
import {
  PaperProvider,
  Appbar,
  Card,
  Text,
} from 'react-native-paper';
import styles from './styles';

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Meu filme favorito" />
      </Appbar.Header>

      <ScrollView style={styles.tela}>
        
<Card style={styles.card}>

  <Card.Cover source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48sKyxTC3m7oGUQoxb9PI27o7KrJyDv9dDhwoibCmV5Q3bHk_vhxCN-Y&s=10" }} />

  <Card.Content style={styles.conteudo}>

    <Text style={styles.titulo}>
      Constantine
    </Text>

    <Text style={styles.nota}>
      2004 • Fantasia sobrenatural
    </Text>

    <Text style={styles.nota}>
      ⭐ IMDb 7.0/10
    </Text>

    <Text style={styles.texto}>
      John Constantine, um experiente ocultista e exorcista que já visitou o inferno, une forças com a policial cética Angela Dodson. Juntos, eles investigam o suicídio da irmã gêmea de Angela, mergulhando em um submundo sobrenatural povoado por anjos e demônios.
    </Text>

  </Card.Content>

</Card>

      </ScrollView>
    </PaperProvider>
  );
}
