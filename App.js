import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageBackground}
            source={require("./assets/images/photo-bg.jpg")}
          ></ImageBackground>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
