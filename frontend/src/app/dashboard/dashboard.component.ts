import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.setMenu([
      ['Accueil', '']
    ]);
  }
}
