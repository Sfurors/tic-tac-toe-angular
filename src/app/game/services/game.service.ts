import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CellCoordinates, GameStateDto } from '../models/game.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  readonly API_HOST = 'http://localhost:8081/api/';

  headers = new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
  });

  constructor(private readonly httpClient: HttpClient) { }

  submit(cellCoordinates: CellCoordinates): Observable<GameStateDto> {
    return this.post('submit', cellCoordinates);
  }

  getGameTableState(): Observable<GameStateDto> {
    return this.get<GameStateDto>('game-state', null);
  }

  resetGameTable(): Observable<GameStateDto> {
    return this.get<GameStateDto>('reset', null);
  }

  private get<T>(url: string, params: any): Observable<T> {
    return this.httpClient.get<T>(`${this.API_HOST}${url}`, {params});
  }

  private post(url: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.API_HOST}${url}`, data, {headers: this.headers}).pipe(
      tap(), //on success popup with info win/draw/next player turn? ANGULAR MATERIAL
      catchError(e => {
        return throwError(e);//TODO error handling
      }));
  }
}
