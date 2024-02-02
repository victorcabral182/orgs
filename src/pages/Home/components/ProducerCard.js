import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useMemo, useReducer } from "react"
import Stars from "./Stars"

const distanceInMeters = (distance) => {
  return `${distance}m`
}

export default function ProducerCard({ name, distance, image, stars }) {
  const [selected, invertSelection] = useReducer((selected) => !selected, false)
  const textDistance = useMemo(() => distanceInMeters(distance), [])

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={invertSelection}>
        <Image style={styles.image} source={image} accessibilityLabel={name} />
        <View style={styles.info}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Stars quantity={stars} editable={selected} large={selected} />
          </View>
          <Text style={styles.distance}>{textDistance}</Text>
        </View>
      </TouchableOpacity>
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
