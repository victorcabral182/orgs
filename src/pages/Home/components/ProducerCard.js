import { Image, StyleSheet, Text, View } from "react-native"
import Stars from "./Stars"

export default function ProducerCard({ name, distance, image, stars }) {
  return (
    <>
      <View style={styles.card}>
        <Image style={styles.image} source={image} accessibilityLabel={name} />
        <View style={styles.info}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Stars quantity={stars} editable />
          </View>

          <Text style={styles.distance}>{distance}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f6f6f6",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: "row",
    // Shadow Androids
    elevation: 4,
    // Shadow IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
})
