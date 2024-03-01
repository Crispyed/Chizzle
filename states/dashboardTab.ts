import { atom } from 'recoil';

const DashboardTabState = atom({
  key: 'DashboardTab',
  default: 'tag',
});

export { DashboardTabState };