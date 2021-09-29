import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View , FlatList, TouchableOpacity, TextInput, ScrollView, Pressable, Image , Button} from 'react-native';
import { color } from 'react-native-reanimated';

export default function App() {




  const [people, setPeople] = useState([
    { name: 'Chocolate waffle', id: '1', imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg', desc: 'Claasic crispy waffle + chocalte sauce + strawberries' },
    { name: 'Chocolate Strawberry waffle', id: '2',imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg', desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate blueberry waffle', id: '3' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '4' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate peach waffle', id: '5' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '6' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate sugar waffle', id: '7' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '8', imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg', desc: 'Claasic crispy waffle + chocalte sauce + strawberries' },
    { name: 'Chocolate waffle', id: '9' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '10' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '11' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '12' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '13' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '14' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '15' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '16', imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg', desc: 'Claasic crispy waffle + chocalte sauce + strawberries' },
    { name: 'Chocolate waffle', id: '17' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '18' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '19' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '20' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '21' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    { name: 'Chocolate waffle', id: '22' , imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg',desc: 'Claasic crispy waffle + chocalte sauce + strawberries'},
    
  ]);

  const [cart, setcart] = useState([]);
  useEffect(
    () => { },[cart]

  );

  const first = useRef(true);


  const addItem=(nitem)=>{
    

    
    //setcart(cart.concat(...cart,nitem));

    cart.push(nitem);
    console.log(cart);
    
  }

  return (
    <View style={styles.container}>
<ScrollView>
      <View>
          <Text style={{fontWeight: 'bold',fontSize: 23,}}>The Belgian Waffle Co.</Text>
          <Text style={{paddingTop: 10, fontStyle: 'italic', color:'grey',}}>Dessert, Beverages</Text>
          <Text style={{fontStyle: 'italic', paddingBottom:20, color:'grey',}}>Kilpauk | 129.0 kms </Text>

      </View>
        <View style={{
      borderStyle: 'dotted',
      borderWidth: 1,
      borderRadius: 1,
    }}>
  </View>


        <View style={{flex:1, flexDirection:"row", height:60}}> 
            <View style={{flex : 1, backgroundColor:"#FFFEF2"}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold'}}>★ 4.3</Text><Text style={{ textAlign: 'center',fontSize: 15, color:'grey'}}> 73% tasty</Text></View>
            <View style={{flex : 1, backgroundColor:"#FFFEF2"}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold', color:'red'}}>CLOSED</Text><Text style={{ textAlign: 'center',fontSize: 15, color:'grey'}}> Free Delivery</Text></View>
            <View style={{flex : 1, backgroundColor:"#FFFEF2"}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold'}}>Rs 200</Text><Text style={{ textAlign: 'center',fontSize: 15, color:'grey'}}> Cost for 2</Text></View>
       </View>

     
       <View style={{flex : 1, backgroundColor:"#FFFEF2", margin:20,}}><Text style={{ textAlign: 'center',fontSize: 15, color:'#006400', backgroundColor:'#90EE90',height: 50,fontSize:13,padding:10, borderRadius:10, borderColor:'#006400', borderWidth:2,}}> This restaurant follows best Safety Standards</Text></View>
      

       <View style={{
      borderStyle: 'dotted',
      borderWidth: 1,
      borderRadius: 1,
    }}>
  </View>



<View style={{flex:1, flexDirection:"row", height:130,paddingTop:20}}> 
<ScrollView horizontal={true}>
            <View style={{flex : 1, color:'#006400', backgroundColor:'white',borderRadius:5, borderColor:'lightgrey', borderWidth:1, width:200,margin :8}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold'}}>15% off upto Rs 100</Text><Text style={{ textAlign: 'center',fontSize: 12, color:'grey'}}>Use 100SBI on 400</Text></View>
            <View style={{flex : 1, color:'#006400', backgroundColor:'white',borderRadius:5, borderColor:'lightgrey', borderWidth:1, width:200, margin:8}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold'}}>15% off upto Rs 100</Text><Text style={{ textAlign: 'center',fontSize: 12, color:'grey'}}>Use 100SBI on 400</Text></View>
            <View style={{flex : 1, color:'#006400', backgroundColor:'white',borderRadius:5, borderColor:'lightgrey', borderWidth:1, width:200, margin:8}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold'}}>15% off upto Rs 100</Text><Text style={{ textAlign: 'center',fontSize: 12, color:'grey'}}>Use 100SBI on 400</Text></View>
         </ScrollView>
            
            </View>
            <View
  style={{
    paddingTop:30,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 10,
  }}
/>


<View style={{flex:1, flexDirection:"row", height:60}}> 
            <View style={{flex : 1, backgroundColor:"#FFFEF2"}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold'}}>PURE VEG</Text><Text style={{ textAlign: 'center',fontSize: 15, color:'black'}}>🌿 PURE VEG</Text></View>
            <View style={{flex : 1, backgroundColor:"#FFFEF2"}}><Text style={{ textAlign: 'center', paddingTop: 20,fontSize: 15, fontWeight: 'bold',}}>BEST SAFETY</Text><Text style={{ textAlign: 'center',fontSize: 15, color:'black'}}> 🛡️ BEST SAFETY</Text></View>
             </View>

     

       
            <FlatList 
            style={{marginTop:70,}}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => (
          <View style={{flex:1, flexDirection:"column",}}> 
            <ScrollView Vertical={true}>

      

       <View style={{flex:1, flexDirection:"row", height:200}}> 
            <View style={{flex : 2, backgroundColor:"#FFFEF2"}}><Text style={{flex:1, padding:10, backgroundColor:'white',  borderRadius:7, fontSize:18, fontWeight:'bold'}}><Text style={{fontSize:10,color:'#DB9200'}}>🌿 ⭐BESTSELLER</Text>{"\n"}{item.name}{"\n"} <Text style={{fontSize:10, color:'grey', fontSize:14}} >Price: Rs 149 | <Text style={{fontSize:7, color:'grey', fontSize:14, color:'#610C04', backgroundColor:'#FFCCCB'}} >{"\n"} 20% OFF TRY NEW</Text></Text></Text>
            <Text style={{flex:1, paddingLeft:10, backgroundColor:'white', height:50, borderRadius:7, color:'grey'}}>{item.desc}</Text>
            </View>
            <View style={{flex : 1, backgroundColor:"#FFFEF2"}}><Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg'}}
       style={{ height: 160,}} />
       <Button
        title="ADD"
        color="green"
        onPress={() => {
          addItem(item); //usual call like vanilla javascript, but uses this operator
       }}      
      />
       
       </View>
       
             </View>

     





            <View
        style={{
          paddingTop:30,
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 2,
        }}
      />
      </ScrollView>
          </View>
        )}
      />


      
       
      <StatusBar style="auto" />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEF2',
    textAlign: 'right', 
    alignSelf: 'stretch',
    paddingTop: 60,
    paddingLeft:25,
    paddingRight:25,
  },
});
