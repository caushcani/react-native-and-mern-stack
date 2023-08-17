import { useContext, useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import LottieView from "lottie-react-native";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/store/user.store";
import { AuthContext } from "../context/AuthProvider";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res: any = await axios.post("auth/login", { email, password });
      if (res.data) {
        dispatch(setUser(res.data.access_token));
        login(res.data.access_token);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <LottieView
          source={require("../assets/animations/animation_llb1hsac.json")}
          autoPlay
          loop
          style={{
            width: "100%",
            aspectRatio: 1,
          }}
        />
      </View>

      <View>
        <View
          style={{
            display: "flex",
          }}
        >
          <Text style={styles.loginText}>Welcome!</Text>
          <Text style={styles.loginParagraph}>
            please login or sign up tp continue to our app
          </Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(val) => setEmail(val)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => setPassword(val)}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button
        title="Login"
        onPress={() => handleLogin()}
        textStyle={styles.text}
      />
      <View style={styles.noAccount}>
        <Text>Don't have an account?</Text>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("Products")}
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
    fontWeight: "bold",
  },
  loginParagraph: {
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
export default Login;
