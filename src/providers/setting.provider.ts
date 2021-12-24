import { Setting, SettingSchema } from '../schemas';

export const SettingProviderSchema = {
  name: Setting.name,
  useFactory: () => {
    return SettingSchema;
  },
};
