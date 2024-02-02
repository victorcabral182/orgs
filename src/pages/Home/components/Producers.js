import { FlatList, StyleSheet, Text } from "react-native"
import ProducerCard from "./ProducerCard"
import useProducers from "../../../hooks/useProducers"

export default function Producers({ header: Header }) {
  const { title, list } = useProducers()

  const HeaderList = () => {
    return <Text style={styles.title}>{title}</Text>
  }

  return (
    <>
      <Header />
      <FlatList
        data={list}
        ListHeaderComponent={HeaderList}
        renderItem={({ item }) => (
          <ProducerCard
            image={item.image}
            distance={item.distance}
            name={item.name}
            stars={item.stars}
          />
        )}
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
