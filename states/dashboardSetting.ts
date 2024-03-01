import { atom } from 'recoil';

const DashboardSettingState = atom({
    key: 'DashboardSetting',
    default: {
        default: {
            displayName: '',
            description: '',
        },
        new: {
            displayName: '',
            description: '',
        }
    },
});

export { DashboardSettingState };