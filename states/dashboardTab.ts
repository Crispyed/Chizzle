import { atom } from 'recoil';

const DashboardTabState = atom({
  key: 'DashboardTab',
  default: 'home',
});

export { DashboardTabState };