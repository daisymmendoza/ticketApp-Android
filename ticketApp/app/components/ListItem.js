import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
import colorScheme from "../config/colorScheme";

function ListItem({ title, image, IconComponent, onPress }) {
  return (
      <TouchableHighlight underlayColor={colorScheme.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            {/* {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>} */}
          </View>
        </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: 'white',
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  // subTitle: {
  //   color: colorScheme.primary
  // },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;