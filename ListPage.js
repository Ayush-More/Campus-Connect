import {
    View,
    Text,
    Button,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import React from 'react'

const ListPage = () => {
  return (
    <>
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50,marginLeft:10 }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
          
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./Ne.png")}
            style={{ marginTop: 1, marginLeft: 20 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 12,
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50 }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
        
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./News.png")}
            style={{ marginLeft: 20, height: 90, width: 100 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 19,
              marginBottom: 1,
              marginLeft: 10,
              
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  </View>
  <View style={{ flexDirection: "row", backgroundColor: "white" ,  marginTop:20,marginLeft:10}}>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50, backgroundColor: "white" }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./Ne.png")}
            style={{ marginTop: 1, marginLeft: 20 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 12,
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50 }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./News.png")}
            style={{ marginLeft: 20, height: 90, width: 100 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 19,
              marginBottom: 1,
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  </View>
  <View style={{ flexDirection: "row", backgroundColor: "white",marginTop:20,marginLeft:10 }}>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50, backgroundColor: "white" }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./Ne.png")}
            style={{ marginTop: 1, marginLeft: 20 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 12,
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50 }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./News.png")}
            style={{ marginLeft: 20, height: 90, width: 100 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 19,
              marginBottom: 1,
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  </View>
  <View style={{ flexDirection: "row", backgroundColor: "white",marginTop:20,marginLeft:10  }}>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50, backgroundColor: "white" }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./Ne.png")}
            style={{ marginTop: 1, marginLeft: 20 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 12,
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ shadowColor: "grey", shadowOpacity: 10, shadowRadius: 50 }}
    >
      <View
        style={{
          height: 196,
          width: 160,
          borderRadius: 15,
          borderWidth: 1,
          marginLeft: 20,
        }}
      >
        <LinearGradient
          colors={["white", "lightgreen"]}
          start={{ x: 0.3, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.linearGradient}
        >
          <Icon
            name="heart"
            size={20}
            color="grey"
            style={{ marginLeft: 130, marginTop: 10 }}
          />
          <Image
            source={require("./News.png")}
            style={{ marginLeft: 20, height: 90, width: 100 }}
          />
          <View
            style={{
              height: 1,
              width: "90%",
              backgroundColor: "black",
              marginTop: 19,
              marginBottom: 1,
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>NewsPaper</Text>
          <Text style={{ marginLeft: 15, fontSize: 18 }}>RS.21</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  </View>
  </>
  )
}
const styles = StyleSheet.create({
    hello: {
      height: 45,
      width: 45,
      borderRadius: 100,
      backgroundColor: "white",
      alignItems: "flex-end",
      marginLeft: 150,
    },
    linearGradient: {
      borderRadius: 15.1,
      height: 194,
      width: 158,
    },
  });
export default ListPage