import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Searchbar =() => {
    return(
        <SafeAreaView style={styles.bar}>
            <TextInput placeholder='Search..' />
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    bar:{
        width: '100%',
        height: 50,
        borderRadius:10,
         
    }
    
})