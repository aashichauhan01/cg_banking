import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanktableComponent } from './banktable/banktable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BanktableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Banking';
}
