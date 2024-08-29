import { Component, OnInit } from '@angular/core';
import { DefaultLayout } from '../layouts/DefaultLayout/default-layout.component';
import { loadProducts } from './services/api';
import { GlobalService } from './services/global/global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-shop';

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    loadProducts().then(json => {
      this.globalService.setProducts(json.data);
    });
  }
}
