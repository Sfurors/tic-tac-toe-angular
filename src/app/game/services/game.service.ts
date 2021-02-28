import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CellCoordinates, GameStateDto } from '../models/game.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  readonly API_HOST = 'http://localhost:8081/api/';

  headers = new HttpHeaders({
    'Content-Type':  'application/json;charset=utf-8',
  });

  constructor(private readonly httpClient: HttpClient, private readonly snackBar: MatSnackBar) { }

  openPopupBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  submit(cellCoordinates: CellCoordinates): Observable<GameStateDto> {
    return this.post<GameStateDto>('submit', cellCoordinates).pipe(
      tap(data => this.openPopupBar(data?.verdict, "OK"),
      catchError((err) => {
        this.openPopupBar("Something gone wrong... Please reset table", "OK");
        return throwError(err);
      })
    ));
  }

  getGameTableState(): Observable<GameStateDto> {
    return this.get<GameStateDto>('game-state', null);
  }

  resetGameTable(): Observable<GameStateDto> {
    return this.get<GameStateDto>('reset', null).pipe(
      tap(data => this.openPopupBar(data.verdict, "OK"),
      catchError((err) => {
        this.openPopupBar("Something gone wrong... Please reset table", "OK");
        return throwError(err);
      })
    ));
  }

  private get<T>(url: string, params: any): Observable<T> {
    return this.httpClient.get<T>(`${this.API_HOST}${url}`, {params});
  }

  private post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(`${this.API_HOST}${url}`, data, {headers: this.headers});
  }
}
