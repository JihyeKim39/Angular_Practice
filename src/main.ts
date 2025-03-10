import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRouter } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)], // ✅ 라우팅 추가
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    appRouter // ✅ 라우터 직접 제공
  ]
}).catch(err => console.error(err));
