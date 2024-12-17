import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import MainHeader from "@/view/components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "@/view/components/Text";
import { colors, textStyles } from "@/constants/designConstants";

import { useData } from "./useData";
import { buttons } from "./constants";

export const HomeScreen = () => {
  const {
    isFetchingNextPage,
    isError,
    pokemons,
    loadMore,
    hasNextPage,
    navigateToPokemonDetails,
    activeButton,
    setActiveButton,
  } = useData();

  const renderFooter = () => {
    if (isError) {
      return (
        <View style={styles.errorFooter}>
          <Text style={styles.errorText}>Failed to load Pokémon. Please try again.</Text>
          <TouchableOpacity onPress={loadMore} style={styles.button}>
            <Text fontSize={textStyles.H6} color={colors.white} weight={600}>
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (isFetchingNextPage) {
      return (
        <ActivityIndicator size="small" style={styles.loadingFooter} color={colors.activeBlue} />
      );
    }

    if (!hasNextPage) {
      return (
        <View style={styles.endOfList}>
          <Text style={styles.endText}>No more Pokémon to load.</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader />
      <View style={styles.content}>
        <Text fontSize={textStyles.H1} color={colors.activeBlue} weight={700} style={styles.title}>
          Pokémons
        </Text>

        <View style={styles.buttonsContainer}>
          {buttons.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setActiveButton(item)}>
              <Text
                fontSize={textStyles.H5}
                color={activeButton === item ? colors.activeBlue : colors.dark}
                weight={700}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text fontSize={textStyles.H6} color={colors.dark} weight={500}>
          There is a list of available pokémons
        </Text>

        <View style={styles.items}>
          <FlatList
            data={pokemons}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigateToPokemonDetails(item.url)}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
