import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import Star from "./Star"

export default function Stars({
  quantity: oldQuantity,
  editable = true,
  large = false,
}) {
  const [quantityStars, setQuantityStars] = useState(oldQuantity)
  const renderStars = () => {
    const score = []
    for (let i = 0; i < 5; i++) {
      score.push(
        <Star
          key={i}
          large={large}
          disabled={!editable}
          selected={i < quantityStars}
          onPress={() => setQuantityStars(i + 1)}
        />
      )
    }
    return score
  }

  return <View style={styles.stars}>{renderStars()}</View>
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: "row",
  },
})
