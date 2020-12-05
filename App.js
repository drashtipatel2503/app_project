
import React from 'react';
import { Button, StyleSheet, Image, Text, TextInput, View, Dimensions, LogBox, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Searchbar from './components/Searchbar';
import { Asset, AppLoading } from 'expo';


const w = Dimensions.get('window').width

export default function App(){
  return(
    <View>
      <Settingoptions/>;
    <Post/>
    </View>
    
  )
} 
const Settingoptions=()=>{
  return(
    <View>
      <Text style={styles.gray}>SETTINGS</Text>
      <Hbar option='Account Setting'/>
      <Hbar option='Privacy Setting'/>
      <Hbar option=' '/>
      <Hbar option=' '/>
    </View>
  )

}



const Hbar=({option})=>{
  
  return(
  <Text style={styles.hbar}>{option}</Text>
  )
} 
const Like=()=>{
  return(
    <Text>51K</Text>
  )
}

const Usernameheader=()=>{
  return(<View style={styles.spacebtw}>
    <Username/>
    <Appicon/>
  </View>)
}

const Img=()=>{
  return(<View style={styles.img}>
    <Image source={require('./assets/icon.png')}/>
  </View>)
}
const Post=()=>{
  return(
    <View style={styles.post}>
      <Usernameheader/>
      
      <Img/>
      <Comment/>
      <Like/>
    </View>
  )
}
const Description=()=>{
  return(
    <View style={styles.Description}>
      <Text>Description</Text>
    </View>)

}

const Appicon=()=>{
  return(
    <View style={styles.roundicon}>
      <Image style={styles.fill} source={require('./assets/icon.png')}/>
    </View>
  )
}
const UsernameApp=()=>{
  return(
    <View style={styles.margin}>
      <Username/>
      <Appicon/>
    </View>
    
  )
}
const Btn=()=>{
  return(
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text> LOG IN</Text>
      </TouchableOpacity>
    </View>
  )
}
const OtherLinks=()=>{
  return(
    <View style={styles.otherlinks}>
      <Text>Other Links</Text>
    </View>)

}




const Login=()=>{
  return(
    <View style={styles.center}>
      <TextInput style={styles.bar} placeholder='USERNAME'/>
      <TextInput style={styles.bar} placeholder='PASSWORD'/>
    
      <Btn/>
      <Text style={styles.h3}>Sign in to create account</Text>
    </View>

  )
}

const Signup=()=>{
  return(
    <View style={styles.centerH}>
      <TextInput style={styles.bar} placeholder='Name'/>
      <TextInput style={styles.bar} placeholder='Username'/>
      <TextInput style={styles.bar} placeholder='Email'/>
      <TextInput style={styles.bar} placeholder='Password'/>
      <TextInput style={styles.bar} placeholder='Retype Password'/>
      <Btn/>
    
    </View>

  )
}

const Username =() => {
  return(<View style={styles.Username}>
    <Text style={styles.h1}>Technical G</Text>
    <Text style={styles.h3}>t_g</Text>
    </View>
  )
}
const Comment=()=>{
  return(
    <View style={styles.Comment}>
      <Text style={ styles.h2}>hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    //justifyContent: 'center',
    padding:10,
    },
  bar:{
    backgroundColor: 'white',
    borderRadius:10,
    alignItems: 'center',
    width: '100%',
    height:14,
    fontSize: '80%',
    justifyContent: 'center',
    padding:10,
    margin:10,
    marginLeft:10,
  },
  Username:{
    justifyContent:'left',
    alignItems:'left',
  },
  hbar:{
    borderWidth:1,
    padding:5,
    margin:5,
    fontSize:20,
    borderRadius:8,
    borderColor:'black',
    width:w,

  },
  
  Comment:{
    justifyContent:'left',
    alignItems:'left',
  },
  h2:{
    fontSize:13,

  },
  h1:{
    fontSize: 17,
    fontWeight:'bold',
  },
  
  h3:{
    fontSize: 14,
  },
  signinbtn:{
    width: w /3,
    color:'black',
  },
  Description:{
    padding:20,
    alignItems:'center',
    backgroundColor: 'white',
    width: w,
    marginLeft:10,
    marginRight:10,
    borderRadius:8,
    borderColor:'black',
    border: 10, 
  },
  otherlinks:{
    padding:20,
    alignItems:'left',
    backgroundColor: 'white',
    width: w,
    marginLeft:10,
    marginRight:10,
    borderRadius:8,
    borderColor:'black',
    border: 10, 
  },
  btn:{
    width: w/4,
    padding:10,
    paddingLeft:15,
    borderRadius: 8,
    marginLeft:3,
    
    backgroundColor : 'white',
  },
  center:{
    alignItems:'center',
    justifyContent:'center',

  },
  img:{
    borderRadius:8,
    height:250,
    width:w*0.95,
    border:8,
    backgroundColor:'blue',
    margin:5,
  },
  roundicon:{
    backgroundColor:'black',
    width:30,
    height:30,
    borderRadius:20,
    alignItems:'right',
  },
  spacebtw:{
    padding:10,
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    border:'black',
    borderWidth:100,
  },
  post:{
    margin:5,
  },
  gray:{
    color:'gray',
    fontSize:20,
    margin:20,
    fontWeight:'bold',
  }
});
