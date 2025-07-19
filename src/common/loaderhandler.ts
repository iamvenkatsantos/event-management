import {DeviceEventEmitter} from 'react-native';

function showLoader(message?: string, progress?: number) {
  DeviceEventEmitter.emit('displayProgressLoader', {message, progress});
}

function updateText(message?: string) {
  DeviceEventEmitter.emit('updateProgressText', {message});
}

function updateProgress(progress?: number) {
  DeviceEventEmitter.emit('updateProgressValue', {progress});
}

function updateAction(actionTitle?: string) {
  DeviceEventEmitter.emit('updateActionTitle', {actionTitle});
}

function hideLoader() {
  DeviceEventEmitter.emit('hideProgressLoader', {});
}

const LoaderHandler = {
  hideLoader,
  showLoader,
  updateAction,
  updateProgress,
  updateText,
};

export default LoaderHandler;
