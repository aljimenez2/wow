import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OAuthService} from './o-auth.service';
import {map} from 'rxjs/operators';

interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private url = 'https://us.api.blizzard.com/data/wow/playable-class/index';
  private token;
  private AT;

  constructor(private http: HttpClient, private oAuth: OAuthService) {
  }


  getClassesIndex() {
    // @ts-ignore
    return this.oAuth.getToken().then((res: Token)  => {
      const accessToken = res.access_token;
      return this.http.get(this.url, {
        params: {
          'region': 'US',
          'namespace': 'static-us',
          'locale': 'en_US',
          'access_token': accessToken
        }
      }).pipe(
        map(_res => {
          return _res;
        })
      ).toPromise();
    });

  }
}
