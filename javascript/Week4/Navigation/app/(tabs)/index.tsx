import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "@/screens/HomeScreens";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen}/>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
