import { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "../components/Button";
import login from "../assets/imgs/login.jpg";

export const Register = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <View style={styles.container}>
      <Image source={login} style={styles.image} />
      <View
        style={{
          display: "flex",
        }}
      >
        <Text style={styles.registerText}>Welcome!</Text>
        <Text style={styles.registerParagraph}>
          please login or sign up tp continue to our app
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setFullName(val)}
        placeholder="Fullname"
      />
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
      <Button title="Register" onPress={() => {}} textStyle={styles.text} />
      <View style={styles.noAccount}>
        <Text>Already have an account?</Text>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("Login")}
        >
          Login
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
  },
  registerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  registerParagraph: {
    fontSize: 15,
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
