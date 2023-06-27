import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non quod aliquid!";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain" 
          source={require("../../assets/image.jpg")}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          to="./About.js"
          style={[
            styles.mainHeader,
            { fontSize: 33, color: "#4c5dad", marginTop: 0 },
          ]}
        >
          muneeb technical
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu/>
        <View style={[styles.lineStyle,{marginVertical:10}]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,

    textAlign: "center",
    width: "100%",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal:10
  },
  headerImage: {
    height: 240,
    width: 600,
    aspectRatio: 1.6,
    display: "flex",
    // alignItems: "stretch",
    marginTop: 50,
    borderRadius: 50,
    marginBottom: 30,


  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    // backgroundColor:"red"
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 15,
    marginTop: 30,
    lineHeight: 26,
    width: "100%",
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor:"gray"
}  
});


export default Home;

