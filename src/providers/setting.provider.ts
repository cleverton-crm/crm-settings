import { Setting, SettingSchema } from '../schemas/setting.schama';

export const SettingProviderSchema = {
  name: Setting.name,
  useFactory: () => {
    return SettingSchema;
  },
};
