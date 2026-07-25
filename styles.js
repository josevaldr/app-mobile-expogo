import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    backgroundColor: '#F5C518',
  },
  headerTitle: {
    color: '#000000',
    fontWeight: 'bold',
  },
  secaoTitulo: {
    color: '#F5C518',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 16,
    marginRight: 10,
  },
  botaoFavoritosContainer: {
    marginBottom: 20,
  },
  erroTexto: {
    color: '#ff4444',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    marginVertical: 10,
    backgroundColor: '#252525',
    borderRadius: 22,
    overflow: 'hidden',
    elevation: 5,
  },
  conteudo: {
    padding: 16,
  },
  titulo: {
    color: '#F5C518',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nota: {
    color: '#F5C518',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },

  diretor: {
    color: '#F5C518',
    fontSize: 14,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  texto: {
    color: '#FFFFFF',
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'justify',
  },
  botaoSalvarContainer: {
    paddingBottom: 30,
  },
});