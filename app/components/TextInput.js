import { View, StyleSheet, TextInput as TextInputComponent, Pressable } from 'react-native'
import React from 'react'

export const TextInput = (props) => {
    const { onSearchFilter, searchText } = props

    return (

        <View style={styles.InputContainer}>
            <TextInputComponent
                style={styles.TextInputContainer}
                maxLength={36}
                onChangeText={(text) => onSearchFilter(text)}
                value={searchText}
                placeholder={"Search"}
            />
            <Pressable onPress={() => setIsBottomSheetOpen(true)} >
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInputContainer: {
        flex: 1,
    },

    InputContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#F0EFEF",
        margin: 16,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 8
    }
});
