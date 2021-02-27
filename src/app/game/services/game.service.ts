import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CellCoordinates, GameStateDto, Sign } from '../models/game.model';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  readonly API_HOST = 'https://localhost:4001/api/';//TODO spring uri
  
  headers = new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
  });

  constructor(private readonly httpClient: HttpClient) { }

  submit(cellCoordinates: CellCoordinates): Observable<GameStateDto> {
    return this.post('submit', cellCoordinates).pipe(
      catchError(e => {
        return throwError(e);
      }));
  }

  getGameTableState(): Observable<GameStateDto> {
    //quick in memory table state mock
    let tableState: Sign[][] = [];
    for(let i: number = 0; i < 3; i++) {
      tableState[i] = [];
      for(let j: number = 0; j < 3; j++) {
          i % 2 ? tableState[i][j] = Sign.X : tableState[i][j] = Sign.O;
       }
      }

    tableState[0][2] = null;
    tableState[0][1] = null;
    tableState[2][2] = null;
    let verdict = '';
    let currentPlayer = Sign.O;
    let game = {tableState, verdict, currentPlayer} as GameStateDto;
    return of(game);
    // return get<T>(url: string, params: any): Observable<T> {
    //   return this.httpClient.get<T>(`${this.API_HOST}${url}`, {params}).pipe(
    //     catchError(e => {
    //       return throwError(e);//TODO error handling
    //     }));
  }

  resetGameTable(): Observable<GameStateDto> {
    // mock reset table
    let emptyTableState: Sign[][] = [];
    for(let i: number = 0; i < 3; i++) {
      emptyTableState[i] = [];
      for(let j: number = 0; j < 3; j++) {
       }
    }
    let verdict = 'draw';
    let game = {tableState: emptyTableState, verdict} as GameStateDto;
    return of(game);
    //return this.get('link/to/spring/api', null);
  }

  //TODO reset game state??
  private get<T>(url: string, params: any): Observable<T> {
    return this.httpClient.get<T>(`${this.API_HOST}${url}`, {params}).pipe(
      catchError(e => {
        return throwError(e);//TODO error handling
      }));
  }
//TODO post coordinates or whole board?? what to get from there?
  private post(url: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.API_HOST}${url}`, data, {headers: this.headers}).pipe(
      tap(), //on success popup with info win/draw/next player turn?
      catchError(e => {
        return throwError(e);//TODO error handling
      }));
  }
}
