import { HomeStackParamList } from "@/view/navigation/HomeNavigator";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp } from "@react-navigation/native";
import { Routes } from "@/view/navigation/Routes";
import { FC } from "react";
import { useData } from "./useData";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import Text from "@/view/components/Text";
import { textStyles } from "@/constants/designConstants";
import { colors } from "../../../constants/designConstants";
import { goBack } from "@/view/navigation/RootNavigator";

type DetailsScreenProps = {
  route: RouteProp<HomeStackParamList, Routes.ITEM_DETAILS>;
};

export const ItemDetailsScreen: FC<DetailsScreenProps> = ({ route }) => {
  const { url } = route.params;
  const { data, isFetching } = useData({ url });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Text fontSize={textStyles.H4} color={colors.activeBlue} weight={600}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>

      {isFetching ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.activeBlue} />
        </View>
      ) : (
        <View>
          <View style={styles.contentTitle}>
            <Text
              fontSize={textStyles.H2}
              color={colors.dark}
              weight={600}
              textTransform="capitalize"
            >
              {data?.name}
            </Text>
          </View>

          <View style={styles.content}>
            <Image source={{ uri: data?.sprites.front_default }} style={styles.image} />
            <View style={styles.row}>
              <Text fontSize={textStyles.H5} color={colors.blue} weight={600}>
                Abilities:
              </Text>
              <Text fontSize={textStyles.H5} color={colors.dark} weight={600}>
                {data?.abilities.map(item => item.ability.name).join(", ")}
              </Text>
            </View>
            <View style={styles.row}>
              <Text fontSize={textStyles.H5} color={colors.blue} weight={600}>
                Base Experience:
              </Text>
              <Text fontSize={textStyles.H5} color={colors.dark} weight={600}>
                {data?.base_experience}
              </Text>
            </View>
            <View style={styles.row}>
              <Text fontSize={textStyles.H5} color={colors.blue} weight={600}>
                Height:
              </Text>
              <Text fontSize={textStyles.H5} color={colors.dark} weight={600}>
                {data?.height}
              </Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
