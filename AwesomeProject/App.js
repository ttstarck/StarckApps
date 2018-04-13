import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
} from "react-native";
import SquareGrid from "react-native-square-grid";

var NUMBERS = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "7",
    "8",
    "9"
];

var styles = StyleSheet.create({
    item: {
        flex: 1,
        alignSelf: "stretch",
        padding: 16
    },
    content: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 32
    }
});


// Best viewed in landscape
/*export default function SquareGridExample(props){
    return (
        <SquareGrid rows={3} columns={3} items={NUMBERS} renderItem={renderItem} />
    );
}*/
export default class HelloWorldApp extends Component {
    constructor(){
        super();
        this.state = [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "7",
            "8",
            "10"
        ];
    }

    changeItem(item) {
        this.state[item] = "X";
    }

    render() {
        return (
            <SquareGrid rows={3} columns={3} items={this.state} renderItem={renderItem} />
        );
    }
}

function changeItem(item) {
    HelloWorldApp.changeItem(item);
}
function renderItem(item) {
    return (
        <TouchableNativeFeedback
            onPress={changeItem(item)}>
            <View style={styles.item}>
                <View style={styles.content}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}