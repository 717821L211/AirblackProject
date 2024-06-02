import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', title: 'India’s No.1 Online Makeup Course' },
  { id: '2', title: 'Learn by LIVE Do-it-Together Classes' },
  { id: '3', title: 'Unlimited Practice Session to master skills' },
];

export default function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [profession, setProfession] = useState('');
  const [goal, setGoal] = useState('');
  const [city, setCity] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/image1.png')} style={styles.image} />
      <Image source={require('./assets/Logo.png')} style={styles.imagelogo} />
      <Image source={require('./assets/star.png')} style={styles.starImage} />
      
      <Text style={styles.text}>PRESENT</Text>
      <Text style={styles.text1}>Professional Online Makeup Course</Text>
      <Text style={styles.text3}>Rated 4.85/5</Text>
      <View style={styles.certificationContainer}>
        <Image 
          source={require('./assets/medal.png')} 
          style={styles.medal} 
        />
        <Text style={styles.text2}>Certification Programme</Text>
      </View>
      
      <View style={styles.list}>
        {data.map(item => (
          <View style={styles.listItem} key={item.id}>
            <Icon name="check" size={20} color="white" style={styles.listItemIcon} />
            <Text style={styles.listItemText}>{item.title}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.formcontainer}>
        <Text style={styles.formhead}>FILL THE FORM BELOW TO ENQUIRE</Text>
        
        <Text style={styles.formtext}>*Enter your name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        
        <Text style={styles.formtext}>91+ Enter your WhatsApp number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
        />
        
        <Text style={styles.formtext}>Select your profession</Text>
        <TextInput
          style={styles.input}
          value={profession}
          onChangeText={setProfession}
        />
        
        <Text style={styles.formtext}>Select your goal</Text>
        <TextInput
          style={styles.input}
          value={goal}
          onChangeText={setGoal}
        />
        
        <Text style={styles.formtext}>Select your City</Text>
        <TextInput
          style={styles.input}
          value={city}
          onChangeText={setCity}
        />
         <Text style={styles.submit}>SUBMIT</Text>
         
</View>
<View style={styles.bottomcontainer}>
<Image source={require('./assets/bottom.jpg')} style={styles.bottom}></Image>
<Text style={styles.bottomtext}>Why Should You Join Airblack?</Text>
<Image source={require('./assets/zoom.png')} style={styles.zoom}></Image>
<Text style={styles.zoomtext}>Do-it-together,{'\n'}live on zoom</Text>

<Image source={require('./assets/rating.png')} style={styles.rating2}></Image>
<Text style={styles.ratingtext}>4.8 /5 Rated{'\n'}Classes</Text>

<Image source={require('./assets/members.png')} style={styles.members}></Image>
<Text style={styles.memberstext}>35000+{'\n'}Members</Text>
          <Text style={styles.apply}>Apply Now</Text>
          </View>
       <Text style={styles.certificate}>Get Certified From India’s Biggest{'\n'}Beauty Platform</Text>
      <View style={styles.certifycontainer}>
      <Image source={require('./assets/certificate.jpg')} style={styles.certify}></Image>
      </View>
      <View style={styles.social}>
        <Image source={require('./assets/bottom.jpg')} style={styles.socialimg}></Image>
        <Text style={styles.img}>Join our growing community of 35,000+ alumni</Text>

        <Text style={styles.apply2}>Apply Now</Text>

        <Image style={styles.insta} source={require('./assets/insta.png')}></Image>
        <Image style={styles.face} source={require('./assets/face.png')}></Image>
        <Image style={styles.link} source={require('./assets/link.png')}></Image>
        <Image style={styles.twitter} source={require('./assets/twitter.png')}></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: 500,
    height: 300,
    resizeMode: 'cover',
  },
  imagelogo: {
    width: 170,
    height: 180,
    position:'absolute',
    top:120,
  },
  starImage: {
    width: 30,
    height: 30,
    position:'absolute',
    top:390,
    right:100,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
    position:'absolute',
    top:250,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
    marginLeft:-10,
  },
  certificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderRadius: 8,
    backgroundColor: 'grey',
    marginLeft:-100,

  },
  text2: {
    fontSize: 16,
    color: 'white',
    padding: '1%',
  },
  medal: {
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: 'grey',
    padding: 5, 
  },
  text3: {
    fontSize: 15,
    color: 'white',
    position:'absolute',
    top:400,
    right:10,
    
  },

  list: {
    marginTop: 20,
    width: '90%',
    position:'absolute',
    top:450,
    
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  listItemIcon: {
    marginRight: 10,
  },
  listItemText: {
    color: 'white',
    fontSize: 18,
  },
  list: {
    marginTop: 20,
    width: '90%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  listItemIcon: {
    marginRight: 10,
  },
  listItemText: {
    color: 'white',
    fontSize: 14,
  },
  //formku
  formcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 8,
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  formtext: {
    fontSize: 17,
  },
  formhead: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    padding:20,
    borderRadius:5,
    backgroundColor:'blue',
    color:'white',
  },
  submit:{
    padding:10,
    backgroundColor:'blue',
    width:300,
    borderRadius:5,
    textAlign:'center',
    color:'white'
  },
  bottomcontainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  bottom:{
    flex: 1,
    width: '100%',
    height: '100%',
    opacity:0.6,
  },
  bottomtext:{
       fontSize:50,
       color:'white',
       fontWeight:'bold',
       textAlign:'center',
       fontFamily:'sans-serif',
       position:'absolute',
       top:60,

  },

  zoom:{
   position:'absolute',
   width: 50,
    height: 50,
    resizeMode: 'cover',
    left:40,
  },
  zoomtext:{
    position:'absolute',
    fontSize:14,
    left:10,
    top:300,
    color:'white',
  },
  rating2:{
    position:'absolute',
   width: 50,
    height: 50,
    resizeMode: 'cover',
    left:200,
  },
  ratingtext:{
    position:'absolute',
    fontSize:14,
    left:170,
    top:300,
    color:'white',
  },
  members:{
    position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:350,
  },
  memberstext:{
    position:'absolute',
    fontSize:14,
    left:330,
    top:300,
    color:'white',
  },
  //button
  btn:{
    position:'absolute',
    top:100,

  },
  apply:{
    position:'absolute',
    top:400,
    backgroundColor:'blue',
    padding:10,
    width:300,
    borderRadius:10,
    textAlign:'center',
    color:'white',
  },
//certificate
  certifycontainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  certify:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  certificate:{
    color:'white',
    fontSize:28,
   fontWeight:'bold',
   marginTop:15,
   fontFamily:'sana-serif',
  },

  //social
  social:{
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  socialimg:{
    flex: 1,
    width: '100%',
    height: '100%',
    opacity:0.6,
  },
  img:{
    color:'white',
    position:'absolute',
    top:60,
    fontSize:30,
    fontWeight:'bold',
  },
  apply2:{
    position:'absolute',
    top:200,
    backgroundColor:'blue',
    padding:10,
    width:350,
    borderRadius:10,
    textAlign:'center',
    color:'white',
  },

  //images of social
    insta:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:50,
     top:300,
    },
    face:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:140,
     top:300,
    },
    link:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:230,
     top:300,
    },
    twitter:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:330,
     top:300,
    },


 bottomcontainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  bottom:{
    flex: 1,
    width: '100%',
    height: '100%',
    opacity:0.6,
  },
  bottomtext:{
       fontSize:40,
       color:'white',
       fontWeight:'bold',
       textAlign:'center',
       fontFamily:'sans-serif',
       position:'absolute',
       top:60,

  },

  zoom:{
   position:'absolute',
   width: 50,
    height: 50,
    resizeMode: 'cover',
    left:40,
  },
  zoomtext:{
    position:'absolute',
    fontSize:20,
    left:10,
    top:300,
    color:'white',
  },
  rating2:{
    position:'absolute',
   width: 50,
    height: 50,
    resizeMode: 'cover',
    left:195,
  },
  ratingtext:{
    position:'absolute',
    fontSize:20,
    left:160,
    top:300,
    color:'white',
  },
  members:{
    position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:305,
  },
  memberstext:{
    position:'absolute',
    fontSize:20,
    left:305,
    top:300,
    color:'white',
  },
  //button
  btn:{
    position:'absolute',
    top:100,

  },
  apply:{
    position:'absolute',
    top:400,
    backgroundColor:'blue',
    padding:10,
    width:300,
    borderRadius:20,
    textAlign:'center',
    color:'white',
  },
//certificate
  certifycontainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  certify:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  certificate:{
    color:'white',
    fontSize:28,
   fontWeight:'bold',
   marginTop:10,
   fontFamily:'sana-serif',
  },

  //social
  social:{
    height: 500,
    width: '100%',
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:40,
  },
  socialimg:{
    flex: 1,
    width: '100%',
    height: '100%',
    opacity:0.6,
  },
  img:{
    color:'white',
    position:'absolute',
    top:60,
    fontSize:30,
    fontWeight:'bold',
  },
  apply2:{
    position:'absolute',
    top:200,
    backgroundColor:'blue',
    padding:10,
    width:350,
    borderRadius:10,
    textAlign:'center',
    color:'white',
  },

  //images of social
    insta:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:50,
     top:300,
    },
    face:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:140,
     top:300,
    },
    link:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:230,
     top:300,
    },
    twitter:{
      position:'absolute',
    width: 50,
     height: 50,
     resizeMode: 'cover',
     left:330,
     top:300,
    },


});
