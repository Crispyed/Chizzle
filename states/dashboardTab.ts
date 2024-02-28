import { atom } from 'recoil';

const DashboardTabState = atom({
  key: 'DashboardTab',
  default: 'post',
});

export { DashboardTabState };