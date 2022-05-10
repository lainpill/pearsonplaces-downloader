
# pearson-place downloader

Downloads eBooks from PearsonPlaces into a pdf format (with node.js)
Ive seen others but I pref nodejs (im weird)


## Installation

```bash
  git clone https://github.com/ch7rms/pearsonplaces-downloader
  cd pearsonplaces-downloader
  npm install
  node index.js
```

## Getting book ID

Login to pearson places, and open ebook

Type command into browser console
```bash
window.foxitAssetURL;
 ```

And it will return a url like 
 ```bash
 https://d2f01w1orx96i0.cloudfront.net/resources/products/epubs/generated/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/foxit-assets
 ```
Where the book id is XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

⚠️Warning: book will be downloaded to current folder


    

