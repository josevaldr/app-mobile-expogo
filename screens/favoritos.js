import { useState, useEffect } from 'react'; 
import { View, ScrollView, Image, Button } from 'react-native';
import { PaperProvider, Appbar, Text, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function Favoritos({ navigation }) {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  async function carregarFavoritos() {
    try {
      const favoritosSalvos = await AsyncStorage.getItem('@meus_favoritos');
      if (favoritosSalvos !== null) {
        setListaFavoritos(JSON.parse(favoritosSalvos));
      }
    } catch (error) {
      console.log("Erro ao carregar os dados.");
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarFavoritos();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <PaperProvider>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Meus Favoritos" />
      </Appbar.Header>

      <View style={styles.container}> 
        
        {/* Se a lista estiver vazia, mostramos um aviso */}
        {listaFavoritos.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum filme salvo ainda.</Text>
        ) : (
          <ScrollView>
            {/* O .map() passa por cada filme da lista e desenha na tela */}
            {listaFavoritos.map((filme, index) => (
              <Card key={index} style={{ marginBottom: 15 }}>
                <Card.Content>
                  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{filme.Title}</Text>
                  <Text>{filme.Year} • {filme.Genre}</Text>
                </Card.Content>
                <Card.Cover source={{ uri: filme.Poster }} style={{ marginTop: 10 }} />
              </Card>
            ))}
          </ScrollView>
        )}

      </View>
    </PaperProvider>
  );
}