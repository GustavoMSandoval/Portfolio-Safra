import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  activeModal: 'resultado'|'performance'|'experiência'|null = null;

  openModal(type: 'resultado'|'performance'|'experiência') {
    this.activeModal = type;
    document.body.style.overflow = 'hidden'
  }
  closeModal() {
    this.activeModal = null;
    document.body.style.overflow = 'auto';
  }
}
