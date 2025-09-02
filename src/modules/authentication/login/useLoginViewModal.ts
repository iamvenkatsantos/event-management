import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { NavigationProp } from "../../../navigation/main";

function useLoginViewModal() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation: NavigationProp<"Login"> = useNavigation();

  const handleLogin = () => {
    navigation.navigate("EventList");
  };

  const socialMediaImage: Record<string, string> = {
    google: 'https://cdn-icons-png.flaticon.com/512/281/281764.png',
    facebook: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    apple: 'https://cdn-icons-png.flaticon.com/512/831/831276.png',
    twitter: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
  };

  return {
    username, password, socialMediaImage,
    setUsername, setPassword, handleLogin
  };
}

export default useLoginViewModal;
