import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home"; 
import Favoritos from "./screens/favoritos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        
        <Stack.Screen 
          name="home"
          component={Home}
          options={{ title: 'Home', headerShown: false }} 
        />
        
        <Stack.Screen 
          name="favoritos"
          component={Favoritos}
          options={{ title: 'Favoritos', headerShown: false }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

  

     





