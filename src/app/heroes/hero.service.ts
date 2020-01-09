import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {MessageService} from './message/message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched Heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched Hero by Id= ${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(`${this.heroesUrl}/${hero.id}`, hero, this.httpOptions).pipe(
      tap(_ => this.log(`update Hero id= ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    console.log(hero);
    return this.httpClient.post(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`add Hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete Hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Hero[]>(`${this.heroesUrl}?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('search Heroes', []))
    );
  }

  private log(message: string) {
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
