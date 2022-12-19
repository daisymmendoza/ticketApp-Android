import { DefaultTheme } from "@react-navigation/native";
import colorScheme from "../config/colorScheme";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colorScheme.primary,
        background: "white"
    }
};