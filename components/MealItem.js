import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-around",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  }
});
