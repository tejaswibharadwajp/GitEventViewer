/**
 * Created by iPhani on 1/24/17.
 */

import React,{ Component } from 'react';
import {View,Text,Image,StyleSheet,TextInput,TouchableHighlight,ActivityIndicator} from 'react-native';
import AuthenticationService from '../Services/AuthenticationService';

export default class GitLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {progressAnimate: false, username: "", password: "",errorType:""}
    }

    render() {
        console.log("Render GitLogin ");
        let errorDisplay= <View/>;

        if(this.state.message=="Bad Credentials"){
            errorDisplay=<View><Text>Invalid Username or Password</Text></View>;

        }
        if(this.state.message=="Unknown Error"){
            errorDisplay=<View><Text>Unknown error occurred please try again</Text></View>;

        }


        return (
            <View>
                <Text>Hello There</Text>
                <Text style={styles.heading}>Git Event Viewer</Text>
                <TextInput onChangeText={(text)=>this.setState({username:text})} style={styles.textBox}
                           placeholder="Git Username"/>
                <TextInput onChangeText={(text)=>this.setState({password:text})} style={styles.textBox}
                           placeholder="Git Password" secureTextEntry='true'/>
                <TouchableHighlight style={styles.button} onPress={this.onLogin.bind(this)}>
                    <Text style={styles.buttonText}> Login</Text>
                </TouchableHighlight>
                {errorDisplay}
                <ActivityIndicator animating={this.state.progressAnimate} size="large"/>
            </View>
        );
    }


    onLogin() {
        this.setState({progressAnimate:true});
        console.log(this.state.username + " " + this.state.password);
        AuthenticationService.gitAuthService({
            username:this.state.username,
            password:this.state.password
        },(results)=>{
            this.setState(Object.assign({progressAnimate:false},results))
            console.log("Results"+JSON.stringify(results)+ "  State Contains:"+JSON.stringify(this.state));
            if(this.state.success){
                console.log(this.props.loggedUser);
                this.props.loggedUser();
                console.log(this.state.success+"  "+this.state.message+" STate is "+JSON.stringify(this.state));
                console.log("User authenticated successfully"+"  "+this.state.success);
                this.props.loggedUser.bind(this);
            }
            else{
                console.log(this.state.success+"  "+this.state.message+" STate is "+JSON.stringify(this.state));
                // console.log(this.state.success+"  "+this.state.message);
            }
        });

    }
}
const styles = StyleSheet.create({
heading: {
    fontSize:40,
    marginTop:20
},
    textBox:{
        height:50,
        marginTop:10,
        padding:4,
        fontSize:20,
        borderWidth:2,
        borderColor:'#F7F7F7'

    },
    button:{
    height:40,
        backgroundColor:"#48BBEC",
        alignSelf:'stretch',
        marginTop:15,
        justifyContent:'center'
    },
    buttonText:{
    fontSize:20,
        color:"#FFF",
        alignSelf:'center'
    }

})