import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
} from 'react-native';

import GitFeed from './GitFeed';
export default class HomePage extends Component {
    constructor(props){
        super(props);
this.state={selectedTab:'repo'}

    }
    render() {
       return(

               <TabBarIOS style={styles.container}>
               <TabBarIOS.Item
                   title="Feed"
                   selected={this.state.selectedTab =='feed'}
                  // icon={require('../ios/GitEventViewer/Images.xcassets/feed.imageset/feed.png')}
                    onPress={()=>this.setState({selectedTab:'feed'})}
                   >
                 <GitFeed/>
               </TabBarIOS.Item>
                   <TabBarIOS.Item
                       title="Repo"
                       selected={this.state.selectedTab =='repo'}
                   //    icon={require('../ios/GitEventViewer/Images.xcassets/repo.imageset/repo.png')}
                       onPress={()=>this.setState({selectedTab:'repo'})}
                   >
                       <Text style={styles.welcome}>Repos!!!!!!</Text>
                   </TabBarIOS.Item>

               </TabBarIOS>


       )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});

AppRegistry.registerComponent('GitEventViewer', () => GitEventViewer);
