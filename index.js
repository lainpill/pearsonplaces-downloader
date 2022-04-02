var fs = require('fs')
const http = require('https');
readlineSync = require('readline-sync');
fs = require('fs');
var completed = -1;
  var bookid;
  var bookpg;
  var bookorg;

  console.log("\x1b[33m", '\nWARNING: book downloads into current folder');
  console.log("\x1b[0m", '');
  var bookid = readlineSync.question('enter book id: ');
  var bookpg = readlineSync.question('enter book pagecount: ');
  var pdf = new (require('pdfkit'))({
    autoFirstPage: false,
      size: "A4",
      layout: "portrait",
      bufferPages: true,
      autoFirstPage: false
});
  pdf.pipe(fs.createWriteStream(bookid + '.pdf'))
    console.log("\nRunning for book: [" + bookid + "] for [" + bookpg + "] pages.");
    var bookorg = bookpg;

    setInterval(function() {
        if(fs.existsSync('./page'+bookorg+'.jpg') && completed == bookorg){
            for (let i = 0; i < bookpg; i++) {
                var img = pdf.openImage('./page' +i+'.jpg');
                pdf.addPage({size: [img.width, img.height]});
                pdf.image(img, 0, 0);
            }
        if(pdf.bufferedPageRange().count === bookpg) {
            console.log("\x1b[31m", '');
            console.log("finished converting! deleting temp pngs.");
            for (let i = 0; i < bookpg; i++) {
                fs.unlink('page'+i+'.jpg', function (err) {
                    if (err) throw err;
                    console.log('deleted: page' + i + ".jpg");
                });
            }
            console.log("\x1b[0m", '');
            setTimeout(function() {
                pdf.end();
                console.log("finished pdf, you can close application now :)")
            },5000);
        }}
      }, 5000);

    bookpg++;
      for (let i = 0; i < bookpg; i++) {
        setTimeout(
            function(){
                const file = fs.createWriteStream('page' + i + '.jpg');
                    const request = http.get('https://d2f01w1orx96i0.cloudfront.net/resources/products/epubs/generated/' + bookid + '/foxit-assets/pages/page' + i, function(response) {
                        response.pipe(file);
                        file.on("finish", () => {
                            completed++;
                            file.close();
                            console.log("download " + i + " completed");
                        });
                    });
            },50 * i)
        }