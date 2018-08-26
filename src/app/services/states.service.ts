import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SharedService } from "./shared.service";


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class StatesService {

  constructor(public sharedService: SharedService) {

  }

  getModulesStatus(): Observable<any> {
    return this.sharedService.doGet("states")
  }

}
