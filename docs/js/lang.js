import { easyHTTP } from "./easyhttp.js";

class Language {
    constructor(){
        // this.en = en;
        // this.fr = fr;
        // this.currentLang = currentLang;
    }

    getLang(){
        console.log("object");

        easyHTTP.get('./js/fr.json')
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    
}

export const lang = new Language;