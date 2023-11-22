import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Booklist from './Booklist';
import Addbook from './Addbook';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function BooklistNavigator() {

  return (
    <Stack.Navigator >
      <Stack.Screen name="Kirjalista" component={Booklist} />
      <Stack.Screen name="Uuden kirjan lisäys" component={Addbook} />
    </Stack.Navigator>
  );

}

export default BooklistNavigator;
