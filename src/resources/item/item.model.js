import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'complete', 'pastdue'],
      required: true
    },
    notes: String,
    due: Date,
    createdBy: {
      ref: 'user',
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'list'
    }
  },
  { timestamps: true }
)
itemSchema.index({ list: 1, name: 1 }, { unique: true })
export const Item = mongoose.model('item', itemSchema)
