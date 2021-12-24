import { Guides, GuidesSchema } from '../schemas';

export const GuidesProviderSchema = {
  name: Guides.name,
  useFactory: () => {
    return GuidesSchema;
  },
};
