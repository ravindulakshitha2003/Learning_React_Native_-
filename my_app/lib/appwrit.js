import { Client ,Account ,Avatars} from 'react-native-appwrite';
import 'react-native-url-polyfill/auto';

export const client = new Client();

client
  .setEndpoint('https://sgp.cloud.appwrite.io/v1')
  .setProject('6ab72a970032f87fb980');

export const account = new  Account(client)
export const awatar = new Avatars(client)