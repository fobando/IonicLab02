/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


  Generated class for the HttpInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

@Injectable()
export class HttpInterceptorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpInterceptorProvider Provider');
  }

}
*/
import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler ,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AtmServesProvider } from '../../providers/atm-serves/atm-serves';

@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor {

    constructor(public atmService: AtmServesProvider) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

      let token = this.atmService.getToken();

      const authReq = req.clone({
        headers : req.headers.set('bbank-apiKey',environment.apiKey)
                             .set('bbank-secure',token)
      });

      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }

  }