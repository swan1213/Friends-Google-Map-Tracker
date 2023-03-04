import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { Friend } from '../models/friend'

@Injectable({
  providedIn: 'root',
})

export class FriendApiService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getFirends(search: string = '', page = 0): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${this.apiUrl}/friends`, {
      params: {search, page},
    });
  }
}
