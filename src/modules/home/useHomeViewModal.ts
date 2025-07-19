
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '../../navigation/main';

function useHomeViewModal() {
  const navigation = useNavigation<DrawerNavigationProp<'Home'>>();

  return {
    navigation,
  };
}

export default useHomeViewModal;
