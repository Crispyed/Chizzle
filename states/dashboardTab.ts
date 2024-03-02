import { atom } from 'recoil';

const RecoilDashboardTabState = atom({
  key: 'DashboardTab',
  default: 'tag',
});

export { RecoilDashboardTabState };