import { Guides, GuidesSchema } from '../schemas/guides.schama';

export const GuidesProviderSchema = {
  name: Guides.name,
  useFactory: () => {
    return GuidesSchema;
  },
};
