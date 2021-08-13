import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Num: </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Num"
                    keyboardType="numeric"
                />
                <Text>Email: </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                />
                <Text>Password: </Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}>You already have an account?</Text>
                <Text style={styles.secondText}>SignIn</Text>
            </View>
        </View>
    )
}

export default SignUpScreen;
