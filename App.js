import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import Home from "./src/pages/Home"

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
