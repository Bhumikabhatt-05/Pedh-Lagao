import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

console.log("cloudinary config:", cloudinary.config())
    try {
        const res = await cloudinary.api.ping();
        console.log("Cloudinary connected:", res);
    } catch (err) {
        console.log(err);
    }
};

export default connectCloudinary;