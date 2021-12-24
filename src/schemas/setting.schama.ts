import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Core } from 'crm-core';

export type SettingDocument = Setting & Document;

@Schema({ timestamps: false })
export class Setting extends Document implements Core.Settings.Schema {
  @Prop({ type: uuidv4, default: uuidv4 })
  _id: string;

  @Prop({ type: String, default: 'undefined' })
  type: string;

  @Prop({ type: String, default: null })
  name: string;

  @Prop({ type: String, default: null })
  object: string;

  @Prop({ type: String, unique: true, index: true })
  property: string;

  @Prop({ type: Array })
  vArray: [];

  @Prop({ type: Boolean })
  vBoolean: boolean;

  @Prop({ type: Map })
  vMap: Map<string, any>;

  @Prop({ type: Number })
  vNumber: number;

  @Prop({ type: String })
  vString: string;
}
export const SettingSchema = SchemaFactory.createForClass(Setting);
