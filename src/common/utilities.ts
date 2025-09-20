import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncData = (key: string, val: any): Promise<void> => {
  return new Promise(resolve => {
    if (key.length > 0) {
      const value = typeof val === 'string' ? val : JSON.stringify(val);
      AsyncStorage.setItem('@UserStore:' + key, value)
        .then(() => {
          console.info('Set data success');
          resolve();
        })
        .catch(er => {
          console.error(er);
          resolve();
        });
    }
  });
};

/**
 * Pass key to retrive the value stored in async storage.
 * @param key
 * @returns Promise
 */
export const getAsyncData = (key: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('@UserStore:' + key)
      .then((response: any) => {
        if (response != null && response !== undefined) {
          if (
            response.trim().startsWith('{') ||
            response.trim().startsWith('[')
          ) {
            resolve(JSON.parse(response));
          } else {
            resolve(response);
          }
        } else {
          reject(translate('key_not_found'));
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
