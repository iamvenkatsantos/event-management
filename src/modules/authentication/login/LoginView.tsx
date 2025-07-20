import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

import Text from '../../../components/text';

import useLoginViewModal from './useLoginViewModal';

import { styles } from './LoginStyle';
import images from '../../../assets/images';

export default function LoginView() {

  const {
    username, password, socialMediaImage,
    setUsername, setPassword, handleLogin
  } = useLoginViewModal();

  Object.keys(socialMediaImage).map((platform) => console.log("socialMediaImage", socialMediaImage[platform]));

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        < TouchableOpacity key={"logo_icon"} style={styles.logoIcon} >
          <Image
            source={images.nexus_logo}
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>


      <Text style={styles.orText}>Or</Text>

      <View style={styles.socialRow}>
        {Object.keys(socialMediaImage).map((platform, index) => {
          console.log('socialMediaImage', socialMediaImage[platform]);
          return (
            < TouchableOpacity key={index} style={styles.socialIcon} >
              <Image
                source={{ uri: socialMediaImage[platform] ?? 'https://via.placeholder.com/40' }}
                style={styles.socialImage}
              />
            </TouchableOpacity>
          )
        })}
      </View>

      {/* Sign Up */}
      <TouchableOpacity>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View >
  );
}
