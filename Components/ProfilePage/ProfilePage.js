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
                        <Image source={ user } style={styles.image} resizeMode="center"></Image>
                    </View>
                </View>

                <View style={styles.infocontainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>
                        Arielle Ramgoolie
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
                        <Text style={[styles.text, styles.subText]}>Completed</Text>
                    </View>
                </View>

            </ScrollView>
            <NavigationBar />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    subText:{
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
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
        paddingHorizontal: '15px',
        flex: 1,
    }
});

export default ProfilePage;