import { atom } from 'recoil';

const DashboardTabState = atom({
  key: 'DashboardTab',
  default: 'setting',
});

export { DashboardTabState };