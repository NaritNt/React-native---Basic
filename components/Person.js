import { View, Text, DeviceEventEmitter } from "react-native";
import { myStyle } from "../style/myStyle";
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Person({ item, deleteData }) {
  return (
    <TouchableOpacity
      onPress={() => {
        deleteData(item.id);
      }}
    >
      <View style={myStyle.content}>
        <Text style={myStyle.header}>
          ชื่อ {item.name} อายุ {item.age}
        </Text>
        <AntDesign name="delete" size={24} color="black" />

      </View>
    </TouchableOpacity>
  );
}
