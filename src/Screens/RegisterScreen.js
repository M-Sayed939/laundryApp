import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {signInWithEmailAndPassword, getRedirectResult, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../firebase/firebase";
import TextDivider from "./components/TextDivider";
import CustomInputField from "./components/CustomInputField";


const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                Alert.alert(user.user.email)
            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    const onPressForgotPassword = () => {
        Alert.alert('Forget Password')
    };

    const onPressSignUp = () => {
        Alert.alert('navigation.navigate("Register")')
        // navigation.navigate("Register");
    };

    const handleLoginWithGoogle = () => {
        // Alert.alert('Gmail login')
        // auth.signInWithPopup(provider)
        //     .then((result) => {
        //         console.log('result', result)
        //     })
        //     .catch((error) => {
        //         console.log('error', error)
        //     })

        // signInWithRedirect(auth, provider)
        //     .then((result) => {
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;
        //         const user = result.user;
        //     }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     const email = error.customData.email;
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        // });
    };

    return (
        <View style={[styles.container, StyleSheet.absoluteFill]}>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>New Account</Text>

            <CustomInputField isPassword={false} placeHolder="Name" value={name}
                              setValue={(text) => setName(text)}/>
            <CustomInputField style={{marginTop: 20,}} isPassword={false} placeHolder="Email" value={email}
                              setValue={(text) => setEmail(text)}/>
            <CustomInputField style={{marginTop: 20,}} isPassword={true} placeHolder="Password" value={password}
                              setValue={(text) => setPassword(text)}/>


            <TouchableOpacity style={[styles.button, {
                marginTop: 20,
            }]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={styles.hintText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLoginWithGoogle}>
                <Image source={require('../../assets/icon_gmail.png')} style={{
                    width: 44,
                    marginTop: 20,
                    alignSelf: 'center'
                }}/>
                <Text style={[styles.buttonText, {marginLeft: 8}]}>Sign in with Gmail</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={styles.hintText}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={onPressSignUp}>
                    <Text style={[styles.textClick, {marginStart: 5}]}>
                        Create a new account
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
    },
    logo: {
        width: 100,
        height: 100,
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 30,
        color: 'rgba(18,18,18,0.6)',
        fontFamily: 'Roboto',
    },
    hintText: {
        color: 'rgba(18,18,18,0.6)',
        fontWeight: 600,
        fontSize: 12,
        marginTop: 16,
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingHorizontal: 24,
        gap: 8,
        width: '100%',
        height: 56,
        backgroundColor: '#46CDD2',
        borderRadius: 100,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
    },
    textClick: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        marginTop: 16,
        fontSize: 12,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 0.6)',
        flex: 0,
        flexGrow: 0
    },
});

export default RegisterScreen;
