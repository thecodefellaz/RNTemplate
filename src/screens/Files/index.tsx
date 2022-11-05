import React, { useState } from 'react';
import { Text, View } from '../../components';
import axiosInstance from '../../utils/axios';
import DocumentPicker from 'react-native-document-picker';
import { AxiosProgressEvent, AxiosRequestConfig } from 'axios';
import { Button, TouchableOpacity, Linking } from 'react-native';

const Files = () => {

  const [url, setUrl] = useState<string>("");

  const onDocumentPress = async () => {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: function (progressEvent: AxiosProgressEvent) {
          const { loaded, total } = progressEvent;
          var percentCompleted = total ? Math.round((loaded * 100) / total) : 100;
          console.log(percentCompleted)
        }
      }

      let formData = new FormData();
      const pickedFile = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      formData.append('file', pickedFile[0]);

      axiosInstance
        .post('/api/v1/toPdf', formData, config)
        .then(res => {
          setUrl(res?.data.filePath)
        })
        .catch(error => {
          const { code } = error?.response?.data;
          switch (code) {
            case 'FILE_MISSING':
              console.error('Please select a file before uploading!');
              break;
            case 'LIMIT_FILE_SIZE':
              console.error(
                'File size is too large. Please upload files below 1MB!',
              );
              break;
            case 'INVALID_TYPE':
              console.error(
                'This file type is not supported! Only .png, .jpg and .jpeg files are allowed',
              );
              break;

            default:
              console.error(
                'Sorry! Something went wrong. Please try again later',
              );
              break;
          }
        });
    } catch (err) {
      console.log('upload error', err);
    }
  };

  const downloadFile = async () => {
    await Linking.openURL(url);
  }

  return (
    <View>
      <Button title="select document" onPress={onDocumentPress} />
      {
        url && <TouchableOpacity onPress={downloadFile}>
          <Text style={{ alignSelf: 'center' }}>{url}</Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export default Files;
