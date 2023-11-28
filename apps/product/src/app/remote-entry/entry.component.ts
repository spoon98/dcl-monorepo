import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'dcl-monorepo-product-entry',
  template: `<dcl-monorepo-product></dcl-monorepo-product>`,
})
export class RemoteEntryComponent {}
