import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@dcl-monorepo/shared-ui';

@Component({
  selector: 'dcl-monorepo-orders',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
