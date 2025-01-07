import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 10
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 100,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "orange",
    padding: 25,
    marginTop: 15,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10
  }
});
