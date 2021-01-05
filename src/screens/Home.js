import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {ScrollView,TextInput} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import Posts from '../screens/Posts'


export default class Home extends React.Component{
    state={
        popularSelected:true
    }
    onTabPressed=()=>{
        this.setState({popularSelected:!this.state.popularSelected})
    }
    render(){
        return(
        <View style={{flex:1}}>
                        <View style={{                  // HEADER SECTION
                height:120,
                width:"100%",
                paddingHorizontal:20,
                alignItems:"center"
            }}> 
                <View style={{
                    flexDirection:"row",
                    paddingVertical:50,
                    alignItems:"center"
                }}>
                    <Text style={{
                        paddingVertical:20
                    }}></Text>

                    <View style={{                  // SEARCH BAR
                        flexDirection:"row",
                        borderColor:"black",
                        borderWidth:1,
                        paddingVertical:5,
                        alignItems:"center",
                        width:"75%",
                        paddingHorizontal:10
                    }}>
                        <TextInput
                            placeholder="search..."
                            style={{
                            
                            fontFamily:"Medium",
                            fontSize:12,
                            width:"90%",
                            color:"black"
                    }}
                        />
                        <Icon name="search1"
                            size={24}
                            color="black"/>
                    </View>
                    <View style={{
                        paddingHorizontal: 10
                    }}>
                        <Icon name = "bells"
                            size={32}
                            color="black"/>
                    </View>
                    <View>
                        <Icon name = "user"
                            size={32}
                            color="black"/>
                    </View>
                </View>
            </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor:"#fff"
            }}
          >
              <View style={{
                  backgroundColor:"#fafafa",
                  height:1000,
                  paddingHorizontal:35
              }}>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Joe Bloggs"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/8.jpg')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#3c636c",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>



                  <View style={{
                      flexDirection:"row"
                  }}>
                     
                      <View style={{
                          height:160,
                          backgroundColor:"#3c636c",
                          width:20,
                          marginLeft:-40,
                          marginRight:20,
                          marginTop:120,
                          borderTopRightRadius:20,
                          borderBottomRightRadius:20
                      }}>

                      </View>

                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Erika B"
                        profile={require('../images/p2.jpg')}
                        photo={require('../images/6.jpg')}
                      />

                  </View>

                  <View style={{
                      flexDirection:"row"
                  }}>
                      <Posts
                        onPress={()=>this.props.navigation.navigate('Detail')}
                        name="Max Bator"
                        profile={require('../images/p1.jpg')}
                        photo={require('../images/3.jpg')}
                      />

                      <View style={{
                          height:160,
                          backgroundColor:"#3c636c",
                          width:20,
                          marginLeft:20,
                          marginTop:120,
                          borderTopLeftRadius:20,
                          borderBottomLeftRadius:20
                      }}>

                      </View>

                  </View>
              </View>

          </ScrollView>
          </View>
        )
    }
}