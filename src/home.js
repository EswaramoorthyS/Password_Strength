import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [value, setValue] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [small, setSmall] = useState(false);
  const [capital, setCapital] = useState(false);
  const [num, setNum] = useState(false);
  const [special, setSpecial] = useState(false);
  const [rep, setRep] = useState(false);
  const [strength, setStrength] = useState(5);
  const [validation, setValidation] = useState('');



  const onChangeTextItem = (e) => {
    fn(e);
    setValue(e)
  }
  const fn = (pass) => {

    
    setSmall(pass.match(/[a-z]+/))
 
    setCapital(pass.match(/[A-Z]+/))
   
    setNum(pass.match(/[0-9]+/))
   
    setSpecial(pass.match(/[$@#&!]+/))
    
    setRep(!pass.match(/([^])\1+/g))
    
    if (pass.length < 6) {
      setErrMsg("pass must be morethan 6 characters need");
    }
    if (pass.length > 6) {
      setErrMsg('');
    }

    if (pass.length > 20) {
      setErrMsg("maximum number of characters is 20");
    }
    if (small && capital) {
      setStrength(3)
    }
    if (small && capital && num) {
      setStrength(2)
    }
    if (small && capital && num && special && rep) {
      setStrength(0);
      if (pass.length > 6) {
        setValidation('This Password is Vlaid')
      }

    }

  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(e) => onChangeTextItem(e)}
        placeholder='Enter Password'
      />
      {value.length > 0 &&
        <View>
          <Text>{errMsg}</Text>
          <Text style={styles.err}>crack Percentage: {strength}%</Text>
          <Text>{validation}</Text>
        </View>
      }
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    paddingTop: 150,
  },
  err: {
    color: "blue"
  }

})