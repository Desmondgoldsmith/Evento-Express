import { Schema } from "mongoose";

export interface ICategory extends Document{
 _id: string
 name: string
}

const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
      

})