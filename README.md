# Dyanmit Frontend Screening
[![Netlify Status](https://api.netlify.com/api/v1/badges/830fbe23-c86d-4afd-b143-5d6ae112a914/deploy-status)](https://app.netlify.com/sites/clever-newton-5b9515/deploys)

[View Demo](https://clever-newton-5b9515.netlify.com/)


## Installation

1. Clone this repo using https://github.com/ben-lehman/dynamit-frontend.git
2. Navigate into the cloned folder and run `npm install`
3. Run `gulp build` to create dist folder
4. Open up dist/index.html in browser

##Notes and areas for improvement

1. The Instagram feed module doesn't expand the entire width of the site in the live demo since the images were pretty low res in the PSD file, so I decided to constrain the width of that section to the image's max widths rather than blow out the images. 
2. For a larger projects I like to modularize my sass code by page/section of the site. Since this was a single page build out I decided to keep everything within my input.scss file.
