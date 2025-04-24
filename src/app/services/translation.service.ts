import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  toggleLanguage() {
    const current = this.translate.currentLang;
    const next = current === 'en' ? 'es' : 'en';
    this.translate.use(next);
    localStorage.setItem('lang', next);
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }
}
