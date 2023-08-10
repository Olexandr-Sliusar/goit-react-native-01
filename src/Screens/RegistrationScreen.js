
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,

  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";

import CustomInput from "../components/CustomInput";

export default function RegistrationScreen() {

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  function handleCloseKeyboard() {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  }

  function handleFormSubmit() {

    setLogin("");
    setEmail("");
    setPassword("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.imageInput}>
          <TouchableOpacity
            style={styles.imageInputIcon}
            onPress={() => Alert.alert("Add Avatar")}
          >
            <SimpleLineIcons
              name="plus"
              size={25}
              color="#FF6C00"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 50,
                fontSize: 25,
                lineHeight: 25,
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.title}>Реєстрація</Text>
        <CustomInput
          value={login}
          setValue={setLogin}
          placeholder={"Логін"}

          keyboardShow={setIsShowKeyboard}
        />

        <CustomInput
          value={email}
          setValue={setEmail}
          placeholder={"Електронна пошта"}

          keyboardShow={setIsShowKeyboard}
        />

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
          onPress={() => {
  
            handleFormSubmit();
            handleCloseKeyboard();
          }}
          title="Зареєструватися"
        >
          <Text style={styles.btnText}>Зареєструватися</Text>
        </TouchableOpacity>

        <View style={styles.linkTextContainer}>
          <Text style={styles.linkText}>Вже маєте аккаунт?</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Go to login")}
          >
            <Text style={styles.linkText}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
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

    paddingTop: 92,
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

    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,

    color: "#FFFFFF",
  },
  formLink: {},
  linkText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  linkTextContainer: {

    flexDirection: "row",
    gap: 5,
  },
  imageInput: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  imageInputIcon: {
    boxSizing: "border-box",
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 50,

    position: "absolute",
    bottom: 14,
    right: -12.5,
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

});


