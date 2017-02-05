
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GitLogin from './Components/GitLogin'
import HomePage from './Components/HomePage';

export default class GitEventViewer extends Component {
    constructor(props){
        super(props);
        this.state={login:false}
    }
  render() {
      console.log("Render indexJS "+this.state.login);
      if(this.state.login){
          return(
            <HomePage/>
                  );
      }
      else{
          return(
      <View style={styles.container}>
    <GitLogin loggedUser={this.loggedUser.bind(this)}/>
      </View>);
  }

  }

  loggedUser(){
        console.log("Inside LoggedUser Function "+this.state.login);
    this.setState({login:true});
      console.log("Inside LoggedUser Function "+this.state.login);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('GitEventViewer', () => GitEventViewer);
