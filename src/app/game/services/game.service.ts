import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CellCoordinates, GameStateDto } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly API_HOST = 'http://localhost:8081/api/';
  private readonly ERROR_MESSAGE = 'Something gone wrong... Please reset table';
  private readonly OK_ACTION = 'OK';
  private readonly HEADERS = new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8',
  });

  constructor(
    private readonly httpClient: HttpClient,
    private readonly snackBar: MatSnackBar
  ) { }

  submit(cellCoordinates: CellCoordinates): Observable<GameStateDto> {
    return this.post<GameStateDto>('submit', cellCoordinates)
      .pipe(
        tap((data: GameStateDto) => {
          if (data.verdict != null) {
            this.openPopupBar(data?.verdict, this.OK_ACTION);
          }
        },
          catchError((err: HttpErrorResponse) => {
            this.openPopupBar(this.ERROR_MESSAGE, this.OK_ACTION);
            return throwError(err);
          })
        ));
  }

  getGameTableState(): Observable<GameStateDto> {
    return this.get<GameStateDto>('game-state', null)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.openPopupBar(this.ERROR_MESSAGE, this.OK_ACTION);
          return throwError(err);
        })
      );
  }

  resetGameTable(): Observable<GameStateDto> {
    return this.get<GameStateDto>('reset', null)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.openPopupBar(this.ERROR_MESSAGE, this.OK_ACTION);
          return throwError(err);
        })
      );
  }

  private get<T>(url: string, params: any): Observable<T> {
    return this.httpClient.get<T>(`${this.API_HOST}${url}`, { params });
  }

  private post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<T>(`${this.API_HOST}${url}`, data, { headers: this.HEADERS });
  }

  private openPopupBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });
  }
}
