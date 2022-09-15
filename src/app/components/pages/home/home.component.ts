import { FilmesService } from './../../../services/filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/app/Filmes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todosFilmes?: Filmes[];
  filmes?: Filmes[];
  pesquisa: string = '';
  id?: any[];
  url?: any;

  constructor(private service: FilmesService, private router: Router) { }

  ngOnInit(): void {
    this.service.pegarTodos().subscribe(
      (filmes: Filmes[])=>{
        this.todosFilmes = filmes
        this.filmes = filmes
      },
      (error)=> console.log(error)
    )
  }

  pesquisar(e: Event){
    const target = e.target as HTMLInputElement
    const value = target.value

    this.filmes = this.todosFilmes?.filter((filme) => {
     return filme.title.toLowerCase().includes(value)
    })
  }

  detalhes(e: Event){
      const target = e.target as HTMLInputElement
      const id = target.id
      console.log(id)
      this.router.navigate([`detalhes/${id}/theaters`])
  }


}
