import express from "express"
import cors from "cors"
import multer from "multer"
import PDFMerger from "pdf-merger-js";
import topdf from "docx2pdf-converter"

const app = express();
app.use(cors());

var merger = new PDFMerger();

const mergepdf = async (path1,path2) => {
  await merger.add(`${path1}`);
  await merger.add(`${path2}`);
  
  await merger.save('merged.pdf'); 
  

}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/merge',upload.array("pdfs",2),(req,res)=>{
    mergepdf(req.files[0].path,req.files[1].path);
    res.sendFile('D:/JAY/fullstack/pdfmerger/backend/merged.pdf',()=>{
        console.log("done merging");
    })
})

app.post('/convert',upload.array("docx",1),async (req,res)=>{
  const inputPath = req.files[0].path;
  topdf.convert(inputPath, 'output.pdf');
   res.sendFile('D:/JAY/fullstack/pdfmerger/backend/output.pdf',()=>{
    console.log("done converting")
  });
})

app.listen(3000,()=>{
    console.log("app listening on port 3000");
})