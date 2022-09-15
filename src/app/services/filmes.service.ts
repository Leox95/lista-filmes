import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filmes } from '../Filmes';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private listaFilmes?: any[];
  private url = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events/'
  constructor(private httpClient: HttpClient) { }

  public pegarTodos(): Observable<Filmes[]> {
    return this.httpClient.get<Filmes[]>(this.url)
  }
  public pegarFilme(id: number): Observable<Filmes>{
    const urlFilme = `${this.url}${id}/theaters`
    return this.httpClient.get<Filmes>(urlFilme)
  }


}
