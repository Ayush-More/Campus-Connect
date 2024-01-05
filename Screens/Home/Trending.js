import { Text, View  , ScrollView,
    Image,
    StyleSheet,
   
    SafeAreaView,
    TouchableOpacity,} from 'react-native'
import React, { Component } from 'react'
import { Icon } from "react-native-elements";
export default class Trending extends Component {
  render() {
    return (
        <View>
        <View>
          <Text
            style={{
              fontSize: 21,
              fontWeight: "bold",
              color: "black",
              paddingTop: 20,
              paddingBottom: 25,
              marginLeft:25
             
            }}
          >
            Trending Internship
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <View
              style={{
                height: 250,
                width: 220,
                backgroundColor: "lightblue",
                borderRadius: 20,
                marginLeft:25,
                borderWidth:1,borderColor:'black'
               
              }}
            >
              <View style={{ flexDirection: "row", }}>
                <Icon
                  reverse
                  name="analytics-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={20}
                  
                />
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: "bold",
                    paddingLeft: 10,
                  }}
                >
                  Actively Hiring
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 10 ,}}>
                <Icon
                  name="folder-open-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={22}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 19,
                    paddingLeft: 12,
                  }}
                >
                  Vivo
                </Text>
              </View>
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginTop: 4,
                }}
              >
                (React Native Developer)
              </Text>
              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "black",
                  marginTop: 10,
                  
                }}
              ></View>
              <View style={{ alignItems: "flex-start", paddingLeft: 12 }}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="location-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>Work From Home</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="card-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>$1000/Month</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="calendar-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>^ Month</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 250,
                width: 220,
                backgroundColor: "lightblue",
                borderRadius: 20,
                marginLeft: 15,
                borderWidth:1,borderColor:'black'
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon
                  reverse
                  name="analytics-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={20}
                />
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: "bold",
                    paddingLeft: 10,
                  }}
                >
                  Actively Hiring
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Icon
                  name="folder-open-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={22}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 19,
                    paddingLeft: 12,
                  }}
                >
                  Vivo
                </Text>
              </View>
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginTop: 4,
                }}
              >
                (React Native Developer)
              </Text>
              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "black",
                  marginTop: 10,
                }}
              ></View>
              <View style={{ alignItems: "flex-start", paddingLeft: 12 }}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="location-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>Work From Home</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="card-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>$1000/Month</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="calendar-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>^ Month</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 250,
                width: 220,
                backgroundColor: "lightblue",
                borderRadius: 20,
                marginLeft: 15,
                borderWidth:1,borderColor:'black'
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon
                  reverse
                  name="analytics-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={20}
                />
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: "bold",
                    paddingLeft: 10,
                  }}
                >
                  Actively Hiring
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Icon
                  name="folder-open-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={22}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 19,
                    paddingLeft: 12,
                  }}
                >
                  Vivo
                </Text>
              </View>
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginTop: 4,
                }}
              >
                (React Native Developer)
              </Text>
              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "black",
                  marginTop: 10,
                }}
              ></View>
              <View style={{ alignItems: "flex-start", paddingLeft: 12 }}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="location-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>Work From Home</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="card-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>$1000/Month</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="calendar-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>^ Month</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 250,
                width: 220,
                backgroundColor: "lightblue",
                borderRadius: 20,
                marginLeft: 15,
                borderWidth:1,borderColor:'black'
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon
                  reverse
                  name="analytics-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={20}
                />
                <Text
                  style={{
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: "bold",
                    paddingLeft: 10,
                  }}
                >
                  Actively Hiring
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Icon
                  name="folder-open-outline"
                  type="ionicon"
                  color="#517fa4"
                  size={22}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 19,
                    paddingLeft: 12,
                  }}
                >
                  Vivo
                </Text>
              </View>
              <Text
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginTop: 4,
                }}
              >
                (React Native Developer)
              </Text>
              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "black",
                  marginTop: 10,
                }}
              ></View>
              <View style={{ alignItems: "flex-start", paddingLeft: 12 }}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="location-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>Work From Home</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="card-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>$1000/Month</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Icon
                    name="calendar-outline"
                    type="ionicon"
                    color="#517fa4"
                    size={22}
                  />
                  <Text style={{ paddingLeft: 10 }}>^ Month</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        </View>
    )
  }
}