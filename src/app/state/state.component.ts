import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status';
import { StateItem } from '../models/state-item';
import { StateSlave } from '../models/state-slave';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor(public stateService: StatesService) {
  }

  displayedColumns: string[] = ['id', 'name', 'state'];
  items: StateItem[];
  slaves: StateSlave[];


  ngOnInit() {
    this.stateService.getModulesStatus()
      .subscribe(
        data => {
          this.items = data.items ;
          this.slaves = data.slaves;
        },
        err => {
          console.log(err) ;
        }) ;
  }

}
