import { Component, Input, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leadservice: LeaderService) { }

  ngOnInit() {
    this.leadservice.getLeaders()
      .then((leader) => this.leaders = leader);
  }

}
