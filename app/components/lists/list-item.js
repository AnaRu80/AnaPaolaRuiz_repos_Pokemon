import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import { Text } from "../../components";
import colors from "../../config/colors";

export function ListItem({
    name,
    pokemonId,
    image,
    onPress,
}) {
    return (
        <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
            <View style={[styles.container]}>
                {image && <Image style={styles.image} source={{ uri: image }} />}
                <View style={styles.detailsContainer}>
                    {pokemonId && (
                        <Text style={styles.pokemonId} numberOfLines={2} text={"#" + pokemonId} />

                    )}
                    <Text style={styles.name} numberOfLines={1} text={name} />

                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",

        // flexDirection: "row",
        // padding: 15,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10

    },
    detailsContainer: {
        flex: 1,
        height1: 10,
        width: 100,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    pokemonId: {
        color: colors.medium,
        justifyContent: "center",
        textAlign: "center"
    },
    name: {
        fontWeight: "500",
    },
});

