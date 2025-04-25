import { HttpClient } from '@angular/common/http';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  provideTranslateService,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Esta función le dice a ngx-translate dónde buscar los archivos JSON
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, 'assets/languages/', '.json');
}

export function provideAppTranslations() {
  const lang = localStorage.getItem('lang') || 'es';

  return [
    provideHttpClient(withInterceptorsFromDi()), // Esto es importante si usás interceptores
    provideTranslateService({
      defaultLanguage: lang,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ];
}
