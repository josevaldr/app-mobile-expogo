import { useState } from 'react'; 
import { ScrollView, View, TextInput, Button, ActivityIndicator, Alert, Keyboard } from 'react-native';
import { PaperProvider, Appbar, Text, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function Home({ navigation }) {
  const [filmes, setFilmes] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function buscarFilmes() {
    if (titulo.trim() === "") {
      setErro("Por favor, digite o nome de um filme.");
      return;
    }
    
    Keyboard.dismiss();
    setCarregando(true);
    setErro("");
    setFilmes(null);
    
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${titulo}&apikey=4cec2fe7`); 
      const data = await response.json();
      
      if (data.Response === "False"){
        setErro("Filme não encontrado");
      } else {
        setFilmes(data);
      }
    }
    catch (error) {
      setErro("Erro na conexão");
    }
    finally {
      setCarregando(false);
    }
  }

  async function salvarFilme() {
    try {
      const favoritosSalvos = await AsyncStorage.getItem('@meus_favoritos');
      let listaDeFavoritos = favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
      const jaExiste = listaDeFavoritos.some(filmeSalvo => filmeSalvo.imdbID === filmes.imdbID);
      
      if (jaExiste) {
        Alert.alert("Aviso", "Este filme já está nos seus favoritos!");
        return; 
      }

      listaDeFavoritos.push(filmes);
      await AsyncStorage.setItem('@meus_favoritos', JSON.stringify(listaDeFavoritos));
      Alert.alert("Sucesso!", "Filme salvo nos favoritos.");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o filme.");
    }
  }

  return (
    <PaperProvider>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Locadora de dados" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <View style={styles.container}> 
        <Text style={styles.secaoTitulo}>Procurar filme</Text>
        
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.input}
            placeholder="Digite o título..." 
            placeholderTextColor="#888"
            value={titulo} 
            onChangeText={setTitulo}
          />
          <Button title="Buscar" color="#F5C518" onPress={buscarFilmes} />
        </View>

        <View style={styles.botaoFavoritosContainer}>
          <Button title="Ver Meus Favoritos" color="#555" onPress={() => navigation.navigate('favoritos')} />
        </View>

        {carregando && <ActivityIndicator size='large' color="#F5C518" />}
        {erro !== "" && <Text style={styles.erroTexto}>{erro}</Text>}

        {filmes && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: filmes.Poster }} />
              
              <Card.Content style={styles.conteudo}>
                <Text style={styles.titulo}>{filmes.Title}</Text>
                
                <Text style={styles.nota}>
                  {filmes.Year} • {filmes.Genre}
                </Text>

                <Text style={styles.diretor}>
                  🎬 Diretor: {filmes.Director}
                </Text>
                
                <Text style={styles.nota}>
                  ⭐ IMDb {filmes.imdbRating}/10
                </Text>
                
                <Text style={styles.texto}>
                  {filmes.Plot}
                </Text>
              </Card.Content>
            </Card>

            <View style={styles.botaoSalvarContainer}>
               <Button title="⭐ Salvar nos Favoritos" onPress={salvarFilme} color="#F5C518" />
            </View>
          </ScrollView>
        )}
      </View>
    </PaperProvider>
  );
}