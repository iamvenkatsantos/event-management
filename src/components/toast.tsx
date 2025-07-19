import React, { Ref, forwardRef, RefObject } from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage, { Position, showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialIcons';

const iconSize = 26;

const toastPaletts = {
  toastSuccessBG: 'rgba(255, 255, 227, 1)',
  toastSuccessIcon: '#000000',
  toastErrorBG: 'rgba(255, 208, 208, 1)',
  toastErrorIcon: '#FFFFFF',
  toastWarningBG: 'rgba(220, 240, 255, 1)',
  toastWarningIcon: '#FFFFFF',
};

export interface ToastProps {
  testID?: string | undefined;
}

const Toast = forwardRef(function AppToast(
  props: ToastProps, ref: Ref<FlashMessage> | undefined
) {
  return (
    <FlashMessage
      ref={ref}
      icon={'auto'}
      duration={5000}
      position={'bottom'}
      testID={props.testID}
      style={styles.flashMessage}
      titleStyle={styles.flashText}
      renderFlashMessageIcon={(icon) => {
        if (icon === 'success') {
          return (
            <Icon name={'done'} size={iconSize}
              color={toastPaletts.toastSuccessIcon} />
          );
        } else if (icon === 'danger') {
          return (
            <Icon name={'error'} size={iconSize}
              color={toastPaletts.toastErrorIcon} />
          );
        } else {
          return (
            <Icon name={'warning'} size={iconSize}
              color={toastPaletts.toastWarningIcon} />
          );
        }
      }}
      hideStatusBar={false}
      floating={true}
    />
  );
});

const styles = StyleSheet.create({
  flashMessage: {
    zIndex: 12000,
  },
  flashText: {
    fontSize: 14,
    lineHeight: 26,
    marginRight: 2,
    marginLeft: 10,
    color: toastPaletts.toastSuccessIcon,
  },
});

export function displaySuccess(
  msg: string, position: Position = 'bottom', ref?: RefObject<FlashMessage>, durationInSeconds = 3
) {
  if (typeof msg === 'string') {
    showMessage({
      message: msg, type: 'success', duration: durationInSeconds * 1000,
      backgroundColor: toastPaletts.toastSuccessBG, icon: 'success', position,
    });
  } else {
    showMessage({
      message: 'The message is not a string.', type: 'danger', duration: 5000,
      backgroundColor: toastPaletts.toastErrorBG, icon: 'danger', position,
    });
  }
}

export function displayError(
  msg: string, position: Position = 'bottom', ref?: RefObject<FlashMessage>, durationInSeconds = 3
) {
  if (typeof msg === 'string') {
    showMessage({
      message: msg, type: 'danger', duration: durationInSeconds * 1000,
      backgroundColor: toastPaletts.toastErrorBG, icon: 'danger', position,
    });
  } else {
    showMessage({
      message: 'The message is not a string.', type: 'danger', duration: 5000,
      backgroundColor: toastPaletts.toastErrorBG, icon: 'danger', position,
    });
  }
}

export function displayWarning(
  msg: string, position: Position = 'bottom', ref?: RefObject<FlashMessage>, durationInSeconds = 3
) {
  if (typeof msg === 'string') {
    showMessage({
      message: msg, type: 'warning', duration: durationInSeconds * 1000,
      backgroundColor: toastPaletts.toastWarningBG, icon: 'warning', position,
    });
  } else {
    showMessage({
      message: 'The message is not a string.', type: 'danger', duration: 5000,
      backgroundColor: toastPaletts.toastErrorBG, icon: 'danger', position,
    });
  }
}

export default Toast;
