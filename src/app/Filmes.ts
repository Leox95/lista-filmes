export interface Filmes{
  id?: number,
  title: string,
  image: string,
  genres?: [{id: number, text: string }]
}
