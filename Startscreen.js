import React,{ useState,useEffect } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native';


const FirstScreen = ({ navigation}) => {   
  const [savedAmount, setSavedAmount] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [Price, setPrice] = useState("");
  const [discount, setdiscount] = useState("");
  const [Error, setError] = useState("");
  const [historysaved, setHistory] = useState([]);
  const [show, setshow] = useState(false);
  
  useEffect(() => {
    if(Price === "" || discount === ""){
        setshow(false)
    }
    else if (discount > 100) {
        setError("Discount Cannot be greater than 100%");
        setshow(false)
    }
    else if (discount <= 100 && Price >= 0 && discount >= 0) {
      var saved = (Price * discount) / 100;
      var final_Price = Price - saved;
      setSavedAmount(saved.toFixed(2));
      setFinalPrice(final_Price.toFixed(2));      
      setError("");
      setshow(true)
    } 
    else if (Price < 0 || discount < 0) {
      setError("Original Price or Discount Price must be greater than 0");
      setshow(false)
    }
    else
    {
      setError("Invalid Input");
       setshow(false)
    }    
  });

  const savedata = () => {
    setHistory(oldHistory => [...historysaved,{ originalprice:Price,finalprice:finalPrice,dicountprice:discount}]);
      setPrice("");
      setdiscount("");
  }

  return (
   <View style={{ flex: 1 }}>
      <View style={{backgroundColor: 'skyblue',alignItems: 'center',height: 50, justifyContent: 'center'}}>
        <Text style={{fontSize: 24,color: 'Black',fontWeight: "bold",}}>DISCOUNT CALCULATOR</Text>
      </View>
      <View style={{alignItems: 'center',justifyContent: 'center',flex: 1,backgroundColor:'White'}}>
      <View>
      <Text style={{color:"Black",fontWeight: "bold",fontSize:30}}>PRICE:</Text>
        <TextInput keyboardType={"number-pad"} value={Price} onChangeText={(orginalPrice) => setPrice(orginalPrice)} style={styles.textFields}  /></View>
        <View style={{ paddingTop: 10 }} />
        <View>
        <Text style={{color:"Black",fontWeight: "bold",fontSize:30}}>DISCOUNT:</Text>
        <TextInput keyboardType={"number-pad"} maxLength={2} value={discount} onChangeText={(discountPercentage) => setdiscount(discountPercentage)} style={styles.textFields} />
        </View>
        <View style={{padding:25}}>
        <Text style={styles.textStyle}>FINAL PRICE       : {finalPrice}</Text>
         <Text style={styles.textStyle}>SAVED AMOUNT : {savedAmount}</Text>
         <Text style={styles.textStyle,{color:'red'}}>{Error}</Text>
         </View>
        <View style={{flexDirection:'row',marginTop:10 }}>
        <View style={{ paddingTop: 10 }} />
        { show ? <TouchableOpacity onPress={() => savedata()} style={styles.saveButton}>
          <Text style={{fontSize: 18,color: 'white',fontWeight: "bold"}}>SAVE RESULT</Text>
        </TouchableOpacity> :null}
        <View style={{ paddingTop: 10,marginLeft:5 }} />
        <TouchableOpacity onPress={() => navigation.navigate('History Screen', {hisObject: historysaved,})} style={styles.historyBtn}>
        <Text style={{fontSize: 18,color: 'white',fontWeight: "bold"}}>VIEW HISTORY</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
    textFields: {
        height: 50,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 18,
        borderRadius: 10,
        color:'Black'
      },
      saveButton: {
        height: 35,
        width: 150,
        backgroundColor: '#388E3C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 2,
      },
      
      textStyle: {
      color: "Black",
      fontWeight: "bold",
      textAlign: "center",
      fontSize:16,
      letterSpacing:1
    },
    historyBtn: {
       height: 35,
      width: 150,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      elevation: 2,
    },
    
  });


  export default FirstScreen;