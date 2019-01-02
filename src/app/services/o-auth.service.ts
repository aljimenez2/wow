import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OAuthService {
  private user_id = '6b2848978ef24a9c877338bbc74c4726';
  private user_secret = 'aHP58sBMrUXvvh5obiR8G0t7bn4KetEI';
  private url = 'https://us.battle.net/oauth/token';

  constructor(private http: HttpClient) {
  }

  async getToken() {
    // @ts-ignore
    return await this.http.get(this.url,
      {
        params: {
          'grant_type': 'client_credentials',
          'client_id': this.user_id,
          'client_secret': this.user_secret
        }
      }
    ).pipe(
      map(res => {
        return res.access_token;
      })
    ).toPromise();
  }

}
