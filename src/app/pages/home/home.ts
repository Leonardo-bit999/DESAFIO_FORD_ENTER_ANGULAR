import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from '../../components/menu/menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
