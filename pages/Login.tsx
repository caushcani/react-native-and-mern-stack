import { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import login from "../assets/imgs/login.jpg";
import { Button } from "../components/Button";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image source={login} style={styles.image} />
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setEmail(val)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => setPassword(val)}
        placeholder="Password"
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Products")}
        textStyle={styles.text}
      />
      <View style={styles.noAccount}>
        <Text>Don't have an account?</Text>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 50,
    // border: "2px solid red",
  },
  loginText: {
    fontSize: 20,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  image: {
    width: 300,
    height: 300,
  },
  noAccount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginTop: 10,
  },
  register: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
export default Login;
