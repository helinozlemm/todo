import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Dimensions} from 'react-native';


const { width, height } = Dimensions.get('window');

class Note extends Component{
    render(){
        return(
            <View key={this.props.keyval} style={styles.list}>
                <Text style={styles.listText}>{this.props.val.date}</Text>
                <Text style={styles.listText}>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteStyle}>
                <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>

            </View>
        );
    }
};

export default Note;

const styles = StyleSheet.create({
    list: {
        position: 'relative',
        padding: 20,
        paddingRight:200,
        borderBottomWidth: 3,
        borderBottomColor: 'black',
    },
    listText: {
        paddingLeft: 20,
        
        borderLeftColor: 'black',
        top:20,
       
    },
    deleteStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FF6138',
        padding: 10,
        top: 40,
        bottom: 10,
        right: 10
    },
    deleteText: {
        color: 'black',
        
    }

})