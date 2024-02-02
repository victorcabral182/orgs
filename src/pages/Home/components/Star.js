import { TouchableOpacity, Image, StyleSheet } from "react-native"
import React from "react"
import starFilled from "../../../assets/estrela.png"
import star from "../../../assets/estrelaCinza.png"

export default function Star({
  selected,
  onPress,
  disabled = true,
  large = false,
}) {
  const styles = stylesFunction(large)
  const getImage = () => {
    if (selected) {
      return starFilled
    } else return star
  }
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
  )
}

const stylesFunction = (large) =>
  StyleSheet.create({
    star: {
      width: large ? 36 : 12,
      height: large ? 36 : 12,
    },
  })
