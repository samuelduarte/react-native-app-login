/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, { useState, useEffect} from 'react';
import logo from './src/assets/logo.png';
import { 
   StyleSheet,
   Text,
   KeyboardAvoidingView,
   TouchableOpacity,
   Image,
   Animated,
   TextInput,
   Platform,
   Keyboard,
   View
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}));
  const [opacity] = useState(new Animated.Value(0)); 
  const [logoAnimated] = useState(new Animated.ValueXY({x: 130, y: 155}));



  useEffect(()=>{

      keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
      keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        useNativeDriver: true,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();

  }, [])

  function handleSubmit(){
    alert('Logado com sucesso');
  }
  function newRegister(){
    alert('Criar Conta');
  }

  function keyboardDidShow(){

    alert('teclado abriu');

    // Animated.parallel([
    //   Animated.timing(logoAnimated.x, {
    //     toValue: 55,
    //     duration: 100,
    //     useNativeDriver: true

    //   }),
    //   Animated.timing(logoAnimated.y, {
    //     toValue: 65,
    //     duration: 100,
    //     useNativeDriver: true
    //   })
    
       
    // ]).start();
    // Animated.parallel([
    //   Animated.timing(logoAnimated.x, {
    //     toValue: Platform.OS == "ios" ? 130 : 50,
    //     duration: 50,
    //     useNativeDriver: true
    //   }),
    //   Animated.timing(logoAnimated.y, {
    //     toValue: Platform.OS == "ios" ? 155 : 65,
    //     duration: 50,
    //     useNativeDriver: true
    //   })
    // ]).start();  
  }

  function keyboardDidHide(){
    alert('Teclado fechado');
  }


  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
      <Animated.Image
      style={{
        width: logoAnimated.x,
        height: logoAnimated.y
      }}
       source={logo}
      />
      </View>

      <Animated.View style={[styles.container, {
        opacity: opacity,
          transform: [  
            { translateY: offset.y}
          ]
      }]}>
          <TextInput 
          style={styles.input}
          placeholder="Email"
          autoCorrect={false} 
          onChangeText={()=>{}}
          />

          <TextInput
          style={styles.input} 
          placeholder="Senha"
          autoCorrect={false} 
          onChangeText={()=>{}}
          />


          <TouchableOpacity onPress={handleSubmit} style={styles.btnSubmit}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={newRegister} style={styles.btnRegister}>
            <Text style={styles.registerText} >Criar Conta</Text>
          </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50

  },
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },  
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  btnText:{
    color: '#fff',
    fontSize: 18
  },  
  btnRegister:{
    marginTop: 10,
  },
  registerText: {
    color: '#fff',
  }, 
});

export default App;
