// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http'; // Necesario para TranslateHttpLoader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

// Función Factory requerida para AOT (Ahead-of-Time) compilation y para cargar los archivos JSON
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/languages/', '.json'); // './assets/languages/' es la ruta a tus archivos JSON
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Tus rutas
    provideHttpClient(), // Proveedor necesario para que TranslateHttpLoader funcione
    provideAnimations(),
    // Configuración de ngx-translate
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient], // Dependencia del loader
        },
        // Opcional: Configuración para que no muestre la clave si falta la traducción
        defaultLanguage: 'en', // Define un idioma por defecto (también se hará en AppComponent)
        useDefaultLang: true, // Si una traducción falta en el idioma actual, usa la del idioma por defecto
      })
    ),
  ],
};
