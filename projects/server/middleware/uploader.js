import multer from 'multer';
import fs from 'fs';

export const uploader = (directory, filePrefix) => {
    // #Define lokasi default directory
    let defaultDir = './public';

    // #storage Configuration
    const storageUpload = multer.diskStorage({
        destination: (req, file, cb) => {
            // #Menentukan lokasi penyimpanan file
            const pathDir = directory ? defaultDir + directory : defaultDir;
            // #Memeriksa lokasi pathDir
            if (fs.existsSync(pathDir)) {
                // #Jika directory ada
                console.log(`Directory ${pathDir} exist ✅`);
                return cb(null, pathDir);
            } else {
                // #Jika directory tidak ada
                fs.mkdir(pathDir, { recursive: true }, (err) => {
                    if (err) {
                        console.log("ERROR mkdir ⚠️ :", err);
                        return cb(err, pathDir);
                    };
                    console.log(`Success created ${pathDir} ✅`);
                    return cb(null, pathDir);
                })
            }
        },
        filename: (req, file, cb) => {
            // #Membaca tipe data file
            // example : namafile.jpg
            let ext = file.originalname.split('.'); // ['namafile','jpg']

            let newName = filePrefix + Date.now() + '.' + ext[ext.length - 1];
            return cb(null, newName);
        }
    })

    const fileFilter = (req, file, cb) => {
        const extFilter = /\.(jpg|jpeg|png|webp)/;
        if (file.originalname.toLowerCase().match(extFilter)) {
            return cb(null, true);
        } else {
            cb(new Error(`File extension denied ❌`), false)
        }
    }

    // #Execute multer
    return multer({ storage: storageUpload, fileFilter })
}