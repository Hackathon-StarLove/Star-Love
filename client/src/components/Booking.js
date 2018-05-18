// import React, { Component } from 'react';

// export class booking extend Component{
  
// const jsonData = { "slots" : {
//     "slot1": "9:00am to 9:30am",
//     "slot2": "9:30am to 10:00am",
//     "slot3": "10:00am to 10:30am",
//     "slot4": "10:30am to 11:00am",
//     "slot5": "11:00am to 11:30am",
//     "slot6": "11:30am to 12:00pm",
//     "slot7": "12:00pm" to "1:OOpm",
//     "slot8": "1:00pm" to "2:00pm",
//     "slot9": "2:00pm" to "3:00pm",
//     "slot10": "3:00pm" to "4:00pm",
//     "slot11": "4:00pm" to "5:00pm",
//     "slot12": "5:00pm" to "6:00pm",
//     "slot13": "6:00pm" to "7:00pm",
//     "slot14": "7:00pm" to "8:00pm",
//     "slot15": "8:00pm" to "9:00pm",
//     "slot16": "9:00pm" to "10:00pm",
//     "slot17": "10:00pm" to "11:00pm",
//     "slot18": "11:00pm" to "12:00am"
//  }
// }
// export default class Slot extends Component {
//   constructor(props) {
//      super(props);
//      this.state ={
//        bookingDate: this.props.navigation.state.params.bookingDate
//      }

//    }
//   _onPressBack(){
//     const {goBack} = this.props.navigation
//     goBack()
//   }
//   _bookSlot(status,key,value){
//     const month = this.state.bookingDate.month
//     const date = this.state.bookingDate.day
//     const user = firebase.auth().currentUser
//     const uid = user.uid
//     let userDataJson = {}
//     if(status)
//     userDataJson[key] = uid
//     else
//     userDataJson[key] = null

//     firebase.database().ref('users').child(uid).child("appointments").child(month).child(date).update(userDataJson)
//   }
//   render() {
//     let _this = this
//     const slots = jsonData.slots
//     const slotsarr = Object.keys(slots).map( function(k) {
//       return (  <View key={k} style={{margin:5}}>
//                   <Animbutton countCheck={0} onColor={"green"} effect={"pulse"} _onPress={(status) => _this._bookSlot(status,k,slots[k]) } text={slots[k]} />
//                 </View>)
//     });
//     return (
//       <View style={styles.container}>
//       <StatusBar barStyle="light-content"/>
//       <View style={Commonstyle.toolbar}>
//         <TouchableOpacity onPress={() => this._onPressBack() }><Text style={Commonstyle.toolbarButton}>Back</Text></TouchableOpacity>
//                     <Text style={Commonstyle.toolbarTitle}></Text>
//                     <Text style={Commonstyle.toolbarButton}></Text>
//       </View>
//       { slotsarr }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
// }

// export default Booking