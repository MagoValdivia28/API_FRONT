import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Users from "../screens/users";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
