import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import starFilled from "../../../assets/estrela.png"
import star from "../../../assets/estrelaCinza.png"

export default function Stars({
  quantity: oldQuantity,
  editable = true,
  large = false,
}) {
  const [quantityStars, setQuantityStars] = useState(oldQuantity)

  const styles = stylesFunction(large)

  const getImage = (index) => {
    if (index < quantityStars) {
      return starFilled
    } else return star
  }

  const renderStars = () => {
    const score = []
    for (let i = 0; i < 5; i++) {
      score.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantityStars(i + 1)}
          disabled={!editable}
        >
          <Image style={styles.star} source={getImage(i)} />
        </TouchableOpacity>
      )
    }
    return score
  }

  return <View style={styles.stars}>{renderStars()}</View>
}

const stylesFunction = (large) =>
  StyleSheet.create({
    stars: {
      flexDirection: "row",
    },
    star: {
      width: large ? 36 : 12,
      height: large ? 36 : 12,
    },
  })
