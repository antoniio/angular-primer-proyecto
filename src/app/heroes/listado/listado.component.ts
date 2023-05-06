import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Hulk', 'Atman', 'Shazam', 'Vision', 'Capitan America'];
  heroeBorrado: string='';

  borrarHeroe(){
    this.heroeBorrado =this.heroes.shift() || '';
  }
  
  

}
