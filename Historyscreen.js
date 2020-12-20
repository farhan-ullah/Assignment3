import React,{ useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,FlatList,} from 'react-native';
import { DataTable } from 'react-native-paper';

const HistoryScreen = ({ route }) => {
  const [historysaved, setHistory] = useState(route.params.hisObject);   
  const clearhistory=()=>{
      for (let i=0;i<historysaved.length;i++){
            setHistory(delete historysaved[i]);
      }
    };
  const deleteIt = (index) => {
    const newHistroy = historysaved.filter((_,x) => x!=index)
    setHistory(newHistroy)
    }
    
  return( 
   <DataTable >
    <DataTable.Header >
      <DataTable.Title>Real Price</DataTable.Title>
      <View style={{padding:2}}/>
      <DataTable.Title >Discount in %</DataTable.Title>
      <DataTable.Title >Total Price</DataTable.Title>
      <DataTable.Title >Delete Item</DataTable.Title>
    </DataTable.Header>
    <FlatList
      data={historysaved}
      renderItem={({item ,index}) => {
      return (
      <DataTable.Row>
      <DataTable.Cell>{item.originalprice}</DataTable.Cell>
      <DataTable.Cell>{item.dicountprice}</DataTable.Cell>
      <DataTable.Cell>{item.finalprice}</DataTable.Cell>
      <DataTable.Cell><TouchableOpacity onPress={() => deleteIt(index)} style={styles.deleteit}>
      <Text>x</Text>
      </TouchableOpacity></DataTable.Cell>
      </DataTable.Row>
          );
        }}
        keyExtractor={(index) => { 
          return index 
          }}/>
      
    <TouchableOpacity onPress={() => clearhistory()} style={styles.clearbutton} >
          <Text style={{fontWeight: "bold",marginLeft:20,color:'Black',fontSize:20}}>CLEAR</Text>
        </TouchableOpacity>
  </DataTable>
 );   
};

const styles = StyleSheet.create({
    deleteit: {
      backgroundColor:'red', 
      borderStyle:'solid',
      borderRadius:25,
      width:20,
      alignItems:"center"
    },
    clearbutton : {
      backgroundColor:'skyblue', 
      borderStyle:'solid',
      borderRadius:25,
      width:100,
      marginLeft:130
    },
    
  });


  export default HistoryScreen;