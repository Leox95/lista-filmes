import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Filmes } from 'src/app/Filmes';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  filmes?: Filmes[];
  filme?: any;
  idParam?: number;
  filmeEscolhido?: Filmes[]

  constructor(private service: FilmesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.idParam = id

    this.service.pegarTodos().subscribe(
      (filmes: Filmes[])=>{
        this.filmes = filmes
        const filmeEscolhido = this.filmes.filter(filme => filme.id == this.idParam)
        this.filmeEscolhido = filmeEscolhido
        console.log(filmeEscolhido)
      })


    this.service.pegarFilme(id).subscribe(
      (filme)=>{
        this.filme = filme
        console.log(filme)
      },
      (error)=> console.log(error)
    )
  }

}
