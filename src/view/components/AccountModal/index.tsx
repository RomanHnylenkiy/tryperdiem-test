import { Image, Modal, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles";
import { useData } from "./useData";
import Text from "../Text";
import { colors, textStyles } from "@/constants/designConstants";

interface IProps {
  showModal: boolean;

  onClose: () => void;
}

const AccountModal = ({ showModal, onClose }: IProps) => {
  const { userInfo, logout } = useData();
  return (
    <Modal visible={showModal} animationType="slide" transparent>
      <TouchableOpacity style={styles.wrapper} onPress={onClose}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <Image source={{ uri: userInfo?.photo as string }} style={styles.image} />
            <Text fontSize={textStyles.H4} color={colors.white} weight={600}>
              {userInfo?.name}
            </Text>
            <Text fontSize={textStyles.H6} color={colors.white} weight={400} style={styles.email}>
              {userInfo?.email}
            </Text>

            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text fontSize={textStyles.H6} color={colors.activeBlue} weight={700}>
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default AccountModal;
