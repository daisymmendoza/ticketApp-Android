import React from "react";
import { StyleSheet, View } from "react-native";

import colorScheme from "../config/colorScheme";

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colorScheme.lighterGrey
  },
});

export default Separator;