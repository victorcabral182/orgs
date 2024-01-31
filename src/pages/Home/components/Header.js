import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { loadHeader, loadProducers } from "../../../services/loadData"
import logo from ".././../../assets/logo.png"

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  logo: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    color: "#464646",
  },
  legend: {
    fontSize: 16,
    lineHeight: 26,
    color: "#a3a3a3",
  },
})

class Header extends React.Component {
  state = {
    header: {
      welcome: "",
      legend: "",
    },
  }
  refreshHeader() {
    const response = loadHeader()
    this.setState({ header: response })
  }
  refreshProducers() {
    const response = loadProducers()
    // this.setState({producers:})
  }

  componentDidMount() {
    this.refreshHeader()
  }
  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.welcome}>{this.state.header.welcome}</Text>
        <Text style={styles.legend}>{this.state.header.legend}</Text>
      </View>
    )
  }
}

export default Header
