import React from "react";
import { Text as ReactNativeText, Platform } from "react-native";
import colors from "../config/colors";
const TEXT_STYLE = {
    color: colors.dark,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
}

export function Text({ text, style, otherProps }) {
    const stylesText = [TEXT_STYLE, style]
    return (
        <ReactNativeText style={stylesText} {...otherProps} numberOfLines={10}>
            {text}
        </ReactNativeText>
    );
}

