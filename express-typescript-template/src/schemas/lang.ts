import mongoose, { HookNextFunction } from 'mongoose'
import { IRole } from '@/schemas/role'

export type LangType = 'en' | 'ko' | 'ch'
/**
 * parentMenuId: IMenu['_id'],
 * name: string,
 * filePath: string,
 * icon: string,
 * description: string
 */
export interface ILang extends mongoose.Document{
  parentLangId: ILang['_id'],
  lang: LangType,
  code: string,
  name: string
}

const LangSchema = new mongoose.Schema({
  parentLangId:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Lang' },
  lang: { type: mongoose.Schema.Types.String, default: 'en' as LangType, required: true },
  code: { type: mongoose.Schema.Types.String, required: true },
  name: { type: mongoose.Schema.Types.String, required: true }
})

LangSchema.pre('save', function (next: HookNextFunction) {
  if (!this.get('code')) {
    const counts = Lang.countDocuments()
    this.set('code', `${this.get('name')}${counts}`)
  }

  next()
})

const Lang = mongoose.model<ILang>('Lang', LangSchema)
export default Lang
