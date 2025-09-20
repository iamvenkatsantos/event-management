import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationProp } from "../../../navigation/main";
import { RootState, AppDispatch } from "../../../redux/store";
import { loginWithGoogle, setUser } from "../../../redux/authSlice";

function useLoginViewModal() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation: NavigationProp<"Login"> = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    navigation.navigate("EventList");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await dispatch(loginWithGoogle()).unwrap();
      if (result) {
        Alert.alert(
          'Success',
          `Welcome ${result.name}! You are now logged in with Google.`,
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate("EventList")
            }
          ]
        );
      }
    } catch (error) {
      console.log("Google login error:", error);

      Alert.alert(
        'Login Failed',
        error as string || 'Google login failed. Please try again.'
      );
    }
  };

  const handleGuestLogin = () => {
    // Set a guest user in the auth state with minimal info
    // Phone and email will be collected during payment
    const guestUser = {
      id: 'guest_user',
      name: 'Guest User',
      email: '', // Will be collected during payment
      phone: '', // Will be collected during payment
      provider: 'guest' as const,
      photoUrl: null
    };
    
    dispatch(setUser(guestUser));
    
    // Navigate directly to EventList without showing dialog
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
    setUsername, setPassword, handleLogin,
    handleGoogleLogin, handleGuestLogin,
    loading, error
  };
}

export default useLoginViewModal;
