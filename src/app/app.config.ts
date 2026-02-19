import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      "apiKey": "AIzaSyDqNBFfvihJWojHPYsID7dp5z-D7SGkjLw",
      "authDomain": "todoappangular-328da.firebaseapp.com",
      "projectId": "todoappangular-328da",
      "storageBucket": "todoappangular-328da.firebasestorage.app",
      "messagingSenderId": "776063723981",
      "appId": "1:776063723981:web:9a735858b1c46a7c25fc84"
    })),
    provideFirestore(() => getFirestore()),
    provideNativeDateAdapter()]
};
