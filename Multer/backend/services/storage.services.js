const imagekit = require('imagekit');

const storageInstance = new imagekit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadToImageKit = async(file,filename) => {
    return await storageInstance.upload({
        file: file,
        fileName: filename,
        folder: "multerImages"
    });
}

module.exports = { uploadToImageKit };