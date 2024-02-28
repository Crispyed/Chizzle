import { atom } from 'recoil';

const cosmosProfileTab = atom({
  key: 'cosmosProfileTab',
  default: 'photo',
});

export { cosmosProfileTab };