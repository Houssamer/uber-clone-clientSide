import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useSpring, animated } from 'react-spring';

const SignInScreen = () => {
    const [signUp, setSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.welcomeText}>Welcome,</Text>
            </View>
            {
                !signUp ? (
                    <animated.View style={styles.bottom}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputText}>Email: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Text style={styles.inputText}>Password: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                            />

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.firstText}>You don't have an account yet?</Text>
                            <Text style={styles.secondText} onPress={() => setSignUp(true)}>SignUp</Text>
                        </View>
                    </animated.View>
                ) : (
                    <View style={styles.bottom}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputText}>Num: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Num"
                                keyboardType="numeric"
                            />
                            <Text style={styles.inputText}>Email: </Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Email"
                            />
                            <Text style={styles.inputText}>Password: </Text>
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
                            <Text style={styles.secondText} onPress={() => setSignUp(false)}>SignIn</Text>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default SignInScreen;
