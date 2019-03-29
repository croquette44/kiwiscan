import { easyHTTP } from "./easyhttp.js";

class Language {
    constructor(){
        // this.en = en;
        // this.fr = fr;
        this.currentLang = 'en';
    }

    chooseLanguage(lang){
        this.currentLang = lang;
        console.log(this.currentLang);
        Language.getLang(lang);
    }

    static getLang(lang){
        easyHTTP.get(`./js/${lang}.json`)
            .then(data => {
                JSON.stringify(data);
                document.querySelector('#navbar_home_link').textContent = data.navbar.home;
                document.querySelector('#navbar_faq_link').textContent = data.navbar.faq;
                document.querySelector('#navbar_team_link').textContent = data.navbar.team;
                document.querySelector('#navbar_contact_link').textContent = data.navbar.contact;
            })
            .catch(err => console.log(err));
    }

    
}

export const lang = new Language;