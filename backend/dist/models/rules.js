import mongoose from 'mongoose';
const guidelineSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Guideline', guidelineSchema);
//# sourceMappingURL=rules.js.map