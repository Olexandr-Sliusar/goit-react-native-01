import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import CustomInput from "../components/CustomInput";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  function handleFormSubmit() {
    // console.log({ email, password });
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.title}>Увійти</Text>

          <CustomInput
            value={email}
            setValue={setEmail}
            placeholder={"Електронна пошта"}
            keyboardShow={setIsShowKeyboard}
          />
          {/* password */}
          <View style={styles.passwordContainer}>
            <CustomInput
              value={password}
              setValue={setPassword}
              placeholder={"Пароль"}
              secureTextEntry={isPasswordHidden}
              keyboardShow={setIsShowKeyboard}
            />

            <TouchableOpacity
              style={styles.showPassword}
              onPress={() => setIsPasswordHidden(!isPasswordHidden)}
            >
              <Text style={styles.showPasswordText}>
                {isPasswordHidden ? "Показати" : "Приховати"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.formButton}
            // onPress={handleFormSubmit}
            onPress={() => {
              handleFormSubmit();
              handleCloseKeyboard();
            }}
            title="Увійти"
          >
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>

          <View style={styles.linkTextContainer}>
            <Text style={styles.linkText}>Немає аккаунту?</Text>
            <TouchableOpacity onPress={() => Alert.alert("Go to register")}>
              <Text style={styles.linkText}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    fontStyle: "robotoRegular",
  },
  container2: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontFamily: "robotoMedium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  showPassword: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  showPasswordText: { fontSize: 16, lineHeight: 19, color: "#1B4371" },
  formButton: {
    height: 50,
    width: "100%",
    alignItems: "center",
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  formLink: {},
  linkText: { fontSize: 16, lineHeight: 19, color: "#1B4371" },
  imageInput: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: "-15%",
  },
  imageInputIcon: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#FF6C00",
    borderRadius: 50,
    borderWidth: 1,
    position: "absolute",
    bottom: "10%",
    right: "-10%",
  },
  linkTextContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
