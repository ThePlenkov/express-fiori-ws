# SAP Fiori server with demo apps
This module - is a web server for local local development of UI5 fiori components.

As illustration how it works I didn't create any apps here but just reused existing demo apps as git submodules.

One of the key features of this module - is loading all UI5 resources from CDN. This helps to improve significantly page reloading time. All ui5 resources will be cached by the browser except local ones.

## Installation
This project uses git submodules. Please read how to clone properly the project with submodules here:
https://git-scm.com/book/en/v2/Git-Tools-Submodules

As alternative way I recommend you to use Gitkraken (https://www.gitkraken.com/), the best git client which clones properly the whole project with submodules

Finally you just need to run ```npm install``` and then ```node server```.
After this you can navigate to http://localhost:3000/

## Use behind proxy
The following example supports a corporate proxy settings. You can define HTTP_PROXY variable in the .env file with your proxy address.

