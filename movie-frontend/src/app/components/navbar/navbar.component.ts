import { CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class AppNavbarComponent {
  Routes = routes;
}
