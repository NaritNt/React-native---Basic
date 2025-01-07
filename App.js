import { View, FlatList, Text, Alert } from "react-native";
import { myStyle } from "./style/myStyle";
import { useState } from "react";
import Person from "./components/Person";
import AddFrom from "./components/AddFrom";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "เน็ท", age: 40 },
    { id: 2, name: "มาริน", age: 10 },
    { id: 3, name: "แจ็ค", age: 20 }
  ]);

  const deleteData = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  };

  const insertData = (name, age) => {
    if (name) {
      setData((prevData) => {
        return [
          { id: Math.random().toString, name, age }, ...prevData
        ]
      })
    } else if (age) {
      Alert.alert("กรุณาป้อนอายุประชากร")
    }
  }

  return (
    <View style={myStyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Person item={item} deleteData={deleteData} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text
            style={{
              alignSelf: "center",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            ข้อมูลประชากร
          </Text>
        }
        ListEmptyComponent={
          <Text style={{ alignSelf: "center", fontSize: 25 }}>ไม่มีข้อมูล</Text>
        }
      />
      <AddFrom insertData={insertData} />
    </View>
  );
}
