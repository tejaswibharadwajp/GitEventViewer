

import React, {Component} from 'react';
import {View,Text} from 'react-native';

const buffer= require('buffer');

class AuthenticationService extends Component{
gitAuthService(creds,cb){
    const rawCreds= new buffer.Buffer(creds.username +":"+ creds.password);
    const encodedCreds=rawCreds.toString('base64');
    this.setState({progressAnimate:true});
    // fetch('https://api.github.com/search/repositories?q=react')
    fetch('https://api.github.com/user',{
        headers: {
            'Authorization': 'Basic '+encodedCreds
        }
    })
        .then((response)=>{
            if((response.status>=200)&&(response.status<300)){
                console.log("Success!!");
            }
            else if(response.status==401){
                throw 'Bad Credentials';
            }
            else{
            throw "Unknown Error";
            }
        }).then((results)=>{
        console.log("Success!! inside then");
        return cb({success:true,message:"Success"});
    }).catch((err)=>{
        if(err=="Bad Credentials")
        return cb({success:false,message:"Bad Credentials"});
        else
            return cb({success:false,message:"Unknown Error"});
    })
}


    }
module.exports = new AuthenticationService();
