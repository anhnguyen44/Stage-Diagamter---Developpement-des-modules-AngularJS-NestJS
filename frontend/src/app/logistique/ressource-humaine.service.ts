import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {QueryService} from '../resource/query-builder/query.service';
import {QueryBuild} from '../resource/query-builder/QueryBuild';
import {Observable} from 'rxjs';
import {Salle} from './Salle';
import {map, share, take} from 'rxjs/operators';
import {RessourceHumaine} from './RessourceHumaine';
import {RendezVousPompe} from './RendezVousPompe';
import {RendezVousRessourceHumaine} from './RendezVousRessourceHumaine';

@Injectable({
  providedIn: 'root'
})
export class RessourceHumaineService {

    apiUrl = environment.api + '/ressource-humaine';
    constructor(
        private http: HttpClient,
        private queryService: QueryService
    ) { }

    getAll(idFranchise: number, queryBuild: QueryBuild): Observable<RessourceHumaine[]> {
        return this.http.get(this.apiUrl + '/getAll/' + idFranchise + this.queryService.parseQuery(queryBuild)).pipe(
            map((resp: any) => resp.data),
            share(), take(1)
        );
    }

    countAll(idFranchise: number, queryBuild: QueryBuild): Observable<number> {
        return this.http.get(this.apiUrl + '/countAll/' + idFranchise + this.queryService.parseQuery(queryBuild)).pipe(
            map((resp: any) => resp.data),
            share(), take(1)
        );
    }

    getByBureau(idBureau: number, queryBuild: QueryBuild): Observable<RessourceHumaine[]> {
        return this.http.get(this.apiUrl + '/getByBureau/' + idBureau + this.queryService.parseQuery(queryBuild)).pipe(
            map((resp: any) => resp.data),
            share(), take(1)
        );
    }

    countByBureau(idBureau: number, queryBuild: QueryBuild): Observable<number> {
        return this.http.get(this.apiUrl + '/countByBureau/' + idBureau + this.queryService.parseQuery(queryBuild)).pipe(
            map((resp: any) => resp.data),
            share(), take(1)
        );
    }

    get(idRessourceHumaine: number): Observable<RessourceHumaine> {
        return this.http.get(this.apiUrl + '/' + idRessourceHumaine).pipe(
            map((resp: any) => resp.data),
            share(), take(1)
        );
    }

    create(ressourceHumaine: RessourceHumaine): Observable<RessourceHumaine> {
        return this.http.post(this.apiUrl, ressourceHumaine).pipe(
            map((resp: any) => resp.data),
            share(), take(1)
        );
    }

    update(ressourceHumaine: RessourceHumaine): Observable<RessourceHumaine> {
        return this.http.put(this.apiUrl, ressourceHumaine).pipe(
            map((resp: any) => resp.data),
            share(), take(1)
        );
    }

    addRendezVousRessourceHumaine(rendezVousRessourceHumaine: RendezVousRessourceHumaine) {
        return this.http.post(this.apiUrl + '/rendezVousRessourceHumaine', rendezVousRessourceHumaine).pipe(
            map((resp: any) => resp.data)
        );
    }

    removeRendezVousRessourceHumaine(rendezVousRessourceHumaine: RendezVousRessourceHumaine) {
        return this.http.delete(this.apiUrl + '/rendezVousRessourceHumaine/' + rendezVousRessourceHumaine.id);
    }
}
