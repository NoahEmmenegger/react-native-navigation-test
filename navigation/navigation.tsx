import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

function Test() {
    const navigation = useNavigation();
    return <Text onPress={() => navigation.navigate("test2")}>Test</Text>;
}

function Test2() {
    return <Text>Test2</Text>;
}

function Foo() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="test" component={Test} />
            <Stack.Screen name="test2" component={Test2} />
        </Stack.Navigator>
    );
}

function Bar() {
    return <Text>bar</Text>;
}

export default function Navigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="test">
            <Tab.Screen name="foo" component={Foo} />
            <Tab.Screen name="bar" component={Bar} />
        </Tab.Navigator>
    );
}
