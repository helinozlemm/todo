import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView,TextInput,TouchableOpacity,Dimensions} from 'react-native';

import Note from './Note';

const { width, height } = Dimensions.get('window');

class Main extends Component{

    constructor(props) {
        super(props);

        this.state={
            noteArray:[],
            noteText:''
        }
    }

    render() {

        let notes= this.state.noteArray.map((val,key)=>{
        return <Note key={key} keyval={key} val={val}
        deleteMethod={() => this.deleteNote(key)}
       
        />
        })


        return(
            <View style={styles.container}>
                <View style={styles.deneme}>
                <View style={styles.header}>
                    <Text style={styles.textStyle}>ToDo</Text>
                </View>
                </View>
                

                <ScrollView>
                    {notes}
                </ScrollView>
                <View style={styles.nav}>
                
                        <TextInput
                         style={styles.textInput}
                         onChangeText={(noteText) =>this.setState({noteText})}
                         placeholder='Enter something'
                         placeholderTextColor='white'
                         
                         >

                        </TextInput>
                    
                    </View>

                    <TouchableOpacity onPress={this.AddMethod.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText}>
                            Add
                        </Text>

                    </TouchableOpacity>
            </View>
        );

        
    }
    AddMethod(){
        if(this.state.noteText) {
            var date = new Date();

            this.state.noteArray.push({
                'date' : date.getFullYear() +
                '/' +(date.getMonth() +1) +
                '/' + date.getDate(),
                'note':this.state.noteText
            });

            this.setState({noteArray:this.state.noteArray});
            this.setState({noteText:this.state.noteText});
           

        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray});
    }
};


export default Main;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DDD6CE',
        alignItems:'center',
        justifyContent:'center',
        
        
    },
    header: {
        backgroundColor: '#FF6138',
        alignItems: 'flex-start',
        justifyContent: 'center',
     
        paddingTop:5
      },
      textStyle: {
        color: 'white',
        fontSize: 18,
        padding: 26,
        
      },
     
      textInput: {
        alignSelf: 'auto',
        color: '#fff',
        padding: 20,
        backgroundColor: '#79BD8F',
       
      },
      deneme:{
          flex:0.1,
          
          width:width
      },
      nav:{
          flex:0.1,
          width:width,
          backgroundColor:'red'
          
      },
      addButton:{
          backgroundColor:'#00A388',
          borderRadius:50,
          width:60,
          height:60,
          position:'absolute',
          right:20,
          bottom:80,
          alignItems:'center',
          justifyContent:'center',
          elevation:8,
          
    
      },
      addButtonText:{
        color: 'white',
        fontSize: 15,
        fontStyle:'italic'
      }


});