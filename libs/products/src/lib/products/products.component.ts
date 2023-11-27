import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@dcl-monorepo/shared-ui';

@Component({
  selector: 'dcl-monorepo-products',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
