import mongoose, { HookNextFunction } from 'mongoose'
import { IRole } from '@/schemas/role'
import Lang from '@/schemas/lang'

export type MenuType = 'desktop' | 'mobile' | 'touch'
/**
 * parentMenuId: IMenu['_id'],
 * name: string,
 * filePath: string,
 * icon: string,
 * description: string
 */
export interface IMenu extends mongoose.Document{
  parentMenuId?: IMenu['_id'],
  title: string,
  name: string
  menuType: MenuType
  filePath: string,
  path: string,
  hidden: boolean
  icon: string,
  role?: Buffer
  margin?: number
  description?: string
  isForGroup: boolean;
}

const MenuSchema = new mongoose.Schema({
  parentMenuId: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'Menu' },
  role: { type: mongoose.Schema.Types.Buffer },
  title: { type: mongoose.Schema.Types.String, required: true, unique: true },
  name: { type: mongoose.Schema.Types.String, required: true, unique: false },
  menuType: { type: mongoose.Schema.Types.String, default: 'desktop' as MenuType, required: true },
  filePath: { type: mongoose.Schema.Types.String, required: true, unique: true },
  hidden: { type: mongoose.Schema.Types.Boolean, default: false, required: true },
  path: { type: mongoose.Schema.Types.String, required: true, unique: true },
  icon: { type: mongoose.Schema.Types.String, required: true },
  margin: { type: mongoose.Schema.Types.Number, default: 12, required: false },
  description: { type: mongoose.Schema.Types.String, required: false },
  isForGroup: { type: mongoose.Schema.Types.Boolean, default: false, required: true }
})

MenuSchema.methods.createTree =  function (): Array<IMenu> {
  return []
}

MenuSchema.pre('save', function (next: HookNextFunction) {
  // if (!this.get('role')) {
  //   const alloc = Buffer.from('FFFFFFFFFFFFF', 'binary')
  //   this.set('role', alloc)
  // }

  console.log(this)

  next()
})

export default mongoose.model<IMenu>('Menu', MenuSchema)
