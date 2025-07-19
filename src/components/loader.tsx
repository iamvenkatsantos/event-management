import React, { useState, useEffect, useRef } from 'react';
import {
  Modal, View, StyleSheet, Dimensions,
  Text, DeviceEventEmitter, TouchableOpacity, ActivityIndicator,
} from 'react-native';

const window = Dimensions.get('window');

function AppLoader() {
  const displayTime = useRef<number>(0);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('Loading...');
  const [loaderProgress, setLoaderProgress] = useState<number | null>(null);
  const [actionTitle, setActionTitle] = useState('');

  useEffect(() => {
    const displaySub = DeviceEventEmitter.addListener('displayProgressLoader', ({ message, progress }) => {
      setLoaderMessage(message ?? 'Loading...');
      setLoaderProgress(progress ?? null);
      if (!loaderVisible) {
        displayTime.current = Date.now();
        setLoaderVisible(true);
        setActionTitle('');
      }
    });

    const textSub = DeviceEventEmitter.addListener('updateProgressText', ({ message }) => {
      setLoaderMessage(message ?? 'Loading...');
    });

    const progressSub = DeviceEventEmitter.addListener('updateProgressValue', ({ progress }) => {
      setLoaderProgress(progress ?? null);
    });

    const actionSub = DeviceEventEmitter.addListener('updateActionTitle', ({ actionTitle }) => {
      setActionTitle(actionTitle ?? '');
    });

    const hideSub = DeviceEventEmitter.addListener('hideProgressLoader', () => {
      const elapsed = Date.now() - displayTime.current;
      const delay = elapsed < 500 ? 500 - elapsed : 0;
      setTimeout(() => {
        setLoaderVisible(false);
        setLoaderProgress(null);
        setLoaderMessage('Loading...');
        setActionTitle('');
      }, delay);
    });

    return () => {
      displaySub.remove();
      textSub.remove();
      progressSub.remove();
      actionSub.remove();
      hideSub.remove();
    };
  }, [loaderVisible]);

  const onActionPress = () => {
    DeviceEventEmitter.emit('onPressLoaderAction', { action: actionTitle });
  };

  return (
    <Modal transparent visible={loaderVisible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.message}>{loaderMessage}</Text>
          {loaderProgress !== null && (
            <Text style={styles.progress}>{Math.round(loaderProgress)}%</Text>
          )}
        </View>

        {actionTitle ? (
          <TouchableOpacity style={styles.actionButton} onPress={onActionPress}>
            <Text style={styles.actionText}>{actionTitle}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    width: window.width,
    height: window.height,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },
  message: {
    marginTop: 15,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  progress: {
    marginTop: 5,
    fontSize: 13,
    color: '#555',
  },
  actionButton: {
    position: 'absolute',
    bottom: '20%',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default AppLoader;