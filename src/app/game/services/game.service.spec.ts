import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

let httpClientSpy: { get: jasmine.Spy };
let matSnackBarSpy: { get: jasmine.Spy };
let gameService: GameService;

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
  });

  it('should be created', () => {
    gameService = new GameService(httpClientSpy as any, matSnackBarSpy as any);
    expect(gameService).toBeTruthy();
  });

});
