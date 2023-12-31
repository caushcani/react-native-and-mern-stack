import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CheckboxButtoon } from "../components/CheckboxButton";
import { useContext, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Button } from "../components/Button";
import { Color } from "../utils/Color";
import { AuthContext } from "../context/AuthProvider";
import { useSelector } from "react-redux";
import { RootState } from "../store/redux/rootState";

const USER_AVATAR =
  "https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg";

export const UserProfile = () => {
  const [gender, setGender] = useState("M");
  const { logout } = useContext(AuthContext);

  const user = useSelector((store: RootState) => store.user);

  return (
    <ScrollView bounces={false}>
      <View style={{ padding: 16, backgroundColor: Color.white }}>
        {/* IMAGE */}
        <View
          style={{
            display: "flex",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Image source={{ uri: USER_AVATAR }} width={100} height={100} />
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Upload image
          </Text>
        </View>

        {/* FORM - NAME*/}
        <View
          style={{
            display: "flex",
            paddingBottom: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.profileText}>Name</Text>
          <TextInput style={styles.input}>{user && user.name}</TextInput>
        </View>

        {/* FORM - GENDER*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            paddingBottom: 8,
            flex: 1,
          }}
        >
          <Text style={styles.profileText}>Gender</Text>

          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            <CheckboxButtoon
              title="Male"
              onPress={() => setGender("M")}
              isActive={gender === "M"}
            />
            <CheckboxButtoon
              title="Female"
              onPress={() => setGender("F")}
              isActive={gender === "F"}
            />
          </View>
        </View>

        {/* FORM - EMAIL*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            paddingBottom: 8,
          }}
        >
          <Text style={styles.profileText}>Email</Text>
          <TextInput style={styles.input}>{user && user.email}</TextInput>
        </View>

        {/* FORM - AGE*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            paddingBottom: 8,
          }}
        >
          <Text style={styles.profileText}>Age</Text>

          <TextInput style={styles.input}></TextInput>
        </View>

        {/* FORM - SETTINGS */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          Settings
        </Text>
        <View
          style={{
            borderColor: Color.gray,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View style={styles.icon}>
                <Entypo name="language" color={Color.black} size={28} />
              </View>
              <Text style={styles.settingsText}>Language</Text>
            </View>
            <Text>English</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",

                alignItems: "center",
                gap: 5,
              }}
            >
              <View style={styles.icon}>
                <Ionicons name="notifications" color={Color.black} size={28} />
              </View>
              <Text style={styles.settingsText}>Notification</Text>
            </View>
            <Text>English</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View style={styles.icon}>
                <Entypo name="moon" color={Color.black} size={28} />
              </View>
              <Text style={styles.settingsText}>Dark mode</Text>
            </View>
            <Text>dark</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View style={styles.icon}>
                <AntDesign
                  name="questioncircle"
                  color={Color.black}
                  size={28}
                />
              </View>
              <Text style={styles.settingsText}>Help center</Text>
            </View>
            <Text>icon here</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 15,
            alignItems: "center",
            paddingBottom: 40,
          }}
        >
          <Button
            title="Log Out"
            onPress={() => {
              logout();
            }}
            style={styles.button}
            textStyle={{ color: Color.white }}
            icon={<Entypo name="log-out" color={Color.white} size={28} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: Color.black,
    width: "70%",
    fontSize: 16,
  },
  profileText: {
    fontSize: 20,
    alignSelf: "center",
    color: Color.gray,
  },
  settingsText: {
    fontWeight: "bold",
  },
  icon: {
    backgroundColor: "#c5ccd6",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    width: "100%",
    backgroundColor: Color.black,
  },
});
