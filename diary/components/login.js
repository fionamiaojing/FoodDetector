import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterUserID, changeUserID, enterPassword, changePassword } from '../action/index';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: { backgroundColor: '#f7a5a5' },
        headerTitleStyle: { color: 'white' },
    }

    login() {
        this.props.enterUserID(this.props.userid);
        this.props.enterPassword(this.props.password);
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={{ 
                        alignItems: 'center',
                        paddingTop: 40,
                        flex: 2
                    }}
                >
                    <Text style={styles.title}>
                        Dear Diary
                    </Text>
                </View>
                <View style={{flex: 6}}>
                    <FormLabel>UserName</FormLabel>
                    <FormInput
                        value={this.props.userid}
                        placeholder='Please enter username...'
                        onChangeText={
                            (text) => this.props.changeUserID(text)
                        }
                    />
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        value={this.props.password}
                        placeholder='Please enter password..'
                        secureTextEntry={true}
                        onChangeText={
                            (text) => this.props.changePassword(text)
                        }
                    />
                    <Button
                        large
                        leftIcon={{name: 'lock'}}
                        title='LOG IN'
                        backgroundColor='#ffcdcd'
                        onPress={() => this.login()}
                    />
                </View>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        userid: state.userid,
        password: state.password
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        enterUserID: enterUserID,
        enterPassword: enterPassword,
        changeUserID: changeUserID,
        changePassword: changePassword
    }, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(LoginScreen)

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#f8f9fc',
      justifyContent:'center',
    },
    title: {
        color: '#f7a5a5',
        fontSize: 40,
        fontWeight: 'bold'
    }
  });