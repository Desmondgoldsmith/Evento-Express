import mongoose from 'mongoose'

// cache mongodb connection 

const MONGODB_URI = process.env.MONGODB_URI
// initialised a cache variable 
//we attempt to use a mongoose property from the global object ie. (global as any).mongoose
//the global objects provide a space to store global objects
//the cached variable is intended to hold a cached connection to the db
let cached = (global as any).mongoose || {conn:null, promise:null}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn // check if cache is already connected
    if(!MONGODB_URI) throw new Error('Mongodb_uri is missing!')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        dbName: 'Evento-Express',
        bufferCommands: false,
}); 
cached.conn = await cached.promise
return cached.conn
}

// by caching the connection , we are able to 
//use the same connection over again without 
//creating one all the time we need to connect to the db