import { HttpInterceptorProvider } from './../providers/http-interceptor/http-interceptor';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TransactionsPage } from '../pages/transactions/transactions';
import { LogoffPage } from '../pages/logoff/logoff';
import { OperationsPage } from '../pages/operations/operations';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AtmServesProvider } from '../providers/atm-serves/atm-serves';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    TransactionsPage,
    LogoffPage,
    OperationsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionsPage,
    LogoffPage,
    OperationsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtmServesProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorProvider,
      multi : true

    }
  ]
})
export class AppModule {}
