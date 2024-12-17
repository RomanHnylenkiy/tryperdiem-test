import { Image, TouchableOpacity, View } from "react-native";
import { colors, textStyles } from "@/constants/designConstants";
import Text from "../Text";
import { styles } from "./styles";
import { useData } from "./useData";
import AccountModal from "../AccountModal/index";

const MainHeader = () => {
  const { userInfo, showModal, setShowModal } = useData();

  return (
    <View style={styles.header}>
      <Text fontSize={textStyles.H5} color={colors.white} style={styles.title} weight={700}>
        Tryperdiem
      </Text>
      <TouchableOpacity style={styles.account} onPress={() => setShowModal(true)}>
        <Text fontSize={textStyles.H7} color={colors.white} style={styles.title}>
          {userInfo?.name}
        </Text>
        <Image source={{ uri: userInfo?.photo as string }} style={styles.image} />
      </TouchableOpacity>

      <AccountModal showModal={showModal} onClose={() => setShowModal(false)} />
    </View>
  );
};

export default MainHeader;
