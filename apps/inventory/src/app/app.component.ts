import { Component } from '@angular/core';
import { ProductListComponent } from '@dcl-monorepo/products';

@Component({
  standalone: true,
  imports: [ProductListComponent],
  selector: 'dcl-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory';
}
