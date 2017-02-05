import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';


export default class GitFeed extends Component {
    constructor(props){
        super(props);

        let ds = new ListView.DataSource({
            rowHasChanged : (r1, r2)=> r1!=r2
        });
      this.state={dataSource:ds.cloneWithRows['A','B']};

    }
    renderRow(rowData){
        return (<Text style={{color:"#333", backgroundColor:'#F5FCFF', alignSelf:'center'}}>
            {rowData}
        </Text>);
    }
    /*componentDidMount(){*/
    //     this.getGitFeed();
    // }
    // getGitFeed(){
    //     // require('../Services/AuthenticationService').gitAuthService()
    //     fetch('https://api.github.com/users/tejaswibharadwajp/events')
    //         .then((response)=> { console.log(response);//let eventType=response.filter((ev)=>ev.type=='PushEvent');
    //        // console.log(eventType);
    //     //this.setState({dataSource: this.state.dataSource.cloneWithRows([eventType])})
    //     })
    //      .catch((err)=>{
    //         console.log(err);
    //
    //     });
    // }
    render() {
        return(
            <View style={styles.container}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            >

            </ListView>
            </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
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

AppRegistry.registerComponent('GitFeed', () => GitFeed);
