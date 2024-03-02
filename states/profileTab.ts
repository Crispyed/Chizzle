import { atom } from 'recoil';

const RecoilProfileTab = atom({
  key: 'profileTab',
  default: 'photo',
});

export { RecoilProfileTab };