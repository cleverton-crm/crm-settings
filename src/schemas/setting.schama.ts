import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';

@Schema({ timestamps: false })
export class Setting extends Document {
  @Prop({ type: uuidv4, default: uuidv4 })
  _id: string;

  @Prop({ type: String, default: 'undefined' })
  type: string;

  @Prop({ type: String, default: null })
  name: string;

  @Prop({ type: Map, default: null })
  values: Map<string, any>;
}
export const SettingSchema = SchemaFactory.createForClass(Setting);
