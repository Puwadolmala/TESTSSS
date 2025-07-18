
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html'
})
export class ProductModalComponent {
  @Input() product: any;
  show = false;

  open(p: any) {
    this.product = p;
    this.show = true;
  }

  close() {
    this.show = false;
  }
}
