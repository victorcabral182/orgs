import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text } from "react-native"
import { loadProducers } from "../../../services/loadData"
import ProducerCard from "./ProducerCard"

export default function Producers({ header: Header }) {
  const [title, setTitle] = useState("")
  const [producersArr, setProducersArr] = useState([])

  useEffect(() => {
    const response = loadProducers()
    setTitle(response.title)
    setProducersArr(response.list)
  }, [])

  const HeaderList = () => {
    return <Text style={styles.title}>{title}</Text>
  }

  return (
    <>
      <Header />
      <FlatList
        data={producersArr}
        ListHeaderComponent={HeaderList}
        renderItem={({ item }) => (
          <ProducerCard
            image={item.image}
            distance={item.distance}
            name={item.name}
            stars={item.stars}
          />
        )} //
        keyExtractor={({ name }) => name} // Similar ao key do .map()
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  },
})
