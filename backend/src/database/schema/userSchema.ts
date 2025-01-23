import { Schema, model } from "mongoose";

const userSchema = new Schema({
	_id: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	mobile_number: { type: String, required: false, unique: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export const User = model("User", userSchema);
