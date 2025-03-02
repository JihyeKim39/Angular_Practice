import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ✅ app 폴더 안에 있으므로 수정 필요

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // ✅ 라우팅 추가
}).catch((err) => console.error(err));
