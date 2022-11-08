import React from "react";
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView } from 'react-native';
// import { Icons, MaterialIcons } from '@expo/vector-icons';
import NavigationBar from '../NavigationBar/NavigationBar';

function ProfilePage() {
    const user = require ('../../assets/user.png');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* <View style={styles.titleBar} >
                    <Icons name="ios-arrow-back" size={24} colour="#52575D"></Icons>
                    <Icons name="md-more" size={24} colour="#52575D"></Icons>
                </View> */}

                <View style= {{ alignSelf:"center" }}>
                    <View style= {styles.profileImage}>
                        <Image source={ {uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg'} } style={styles.image} resizeMode="center" resizeMethod="contain"></Image>
                    </View>
                </View>

                <View style={styles.infocontainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>
                        Avik Chakraborty
                    </Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style= {styles.statsBox}>
                        <Text style={[styles.text, {fontSize: 24}]}>24</Text>
                        <Text style={[styles.text, styles.subText]}>Challenges</Text>
                        <Text style={[styles.text, styles.subText]}>Completed</Text>
                    </View>
                    <View style= {styles.statsBox}>
                        <Text style={[styles.text, {fontSize: 24}]}>4</Text>
                        <Text style={[styles.text, styles.subText]}>Friends</Text>
                    </View>
                    <View style= {styles.statsBox}>
                        <Text style={[styles.text, {fontSize: 24}]}>7</Text>
                        <Text style={[styles.text, styles.subText]}>Challenges</Text>
                        <Text style={[styles.text, styles.subText]}>Won</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container : {
        paddingTop: 20,
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        height: '100%',
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    subText:{
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: '500',
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    titlebar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
    },
    infocontainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16,
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32,
    },
    statsBox: {
        alignItems: "center",
        paddingHorizontal: 15,
        flex: 1,
    }
});

export default ProfilePage;