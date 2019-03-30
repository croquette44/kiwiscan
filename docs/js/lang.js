import { easyHTTP } from "./easyhttp.js";
import { clientStorage } from "./localstorage.js";

class Language {
    constructor(){
        this.currentLang = clientStorage.getItemFromStorage('lang');
    }

    chooseLanguage(lang){

        switch (lang) {
            case 'fr':
                clientStorage.storeItem('lang', 'fr');
                break;
            
            case 'en':
                clientStorage.storeItem('lang', 'en');
                break;
            
            default:
            clientStorage.storeItem('lang', 'en');
                break;
        }

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

    selectedLanguageInit(){
        Language.getLang(this.currentLang[0]);
    }

}

export const lang = new Language;