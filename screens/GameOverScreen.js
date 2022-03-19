import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOver = props => {

    return (
            <ScrollView>
                <View style={styles.screen}>
                    <TitleText style={styles.title}>GAME OVER</TitleText>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../assets/images/success.png')} 
                            // fadeDuration={300}
                            // source={{uri:'https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTgxMjMxMTQwNjM5MjIxMDk2/why-k2-is-the-worlds-most-tough-mountain-to-climb.jpg'}} 
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.resultContainer}>
                        <BodyText style={styles.resultText}>Ypur phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
                    </View>
                    <MainButton onPress={props.onRestart}>
                        NEW GAME
                    </MainButton>
                </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
       marginHorizontal: 30,
       marginVertical: Dimensions.get('window').height / 60
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOver;