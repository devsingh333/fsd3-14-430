import { mkdir,rm } from "fs/promises";

// creating one by one:
// await mkdir("uploads");
// await mkdir("uploads/images");


// for simultaneous creation:
// await mkdir("docs/resumes/data",{recursive: true})


// removes the inner most folder:
// await rm("docs/resumes/data",{recursive:true});


// removes the main and sub folders also :
await rm("docs",{recursive:true});