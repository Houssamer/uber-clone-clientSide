import React, { useState } from 'react'
import { View, Text, Image, TextInput, CheckBox, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './style';

const ProfileScreen = () => {

    const [man, setMan] = useState(false);
    const [woman, setWoman] = useState(false);

    return (
        <KeyboardAvoidingView 
            behavior="height"
            style={styles.container}
        >
            <View style={styles.image_container}>
                <Image source={require('../../assets/images/profile.png')} style={styles.image} />
            </View>
            <Text style={styles.User}>User</Text>
            <View style={styles.inputs_container}>
                <View style={styles.input_container}>
                    <Text style={styles.text}>First Name: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="First Name"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Last Name: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Last Name"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Email: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Email"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>City: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="City"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Zip Code: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Zip Code"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Gender: </Text>
                    <View style={styles.checkbox_container}>
                        <CheckBox 
                            style={styles.checkbox}
                            value={man}
                            onValueChange={setMan}
                        />
                        <Text>Man</Text>
                        <CheckBox 
                            style={styles.checkbox}
                            value={woman}
                            onValueChange={setWoman}
                        />
                        <Text>Woman</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={{alignItems:"center", justifyContent:"center"}}>
                <View style={styles.button}>
                    <Text style={styles.button_text}>Update</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default ProfileScreen;
