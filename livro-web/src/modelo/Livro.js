export class Livro {
    constructor(_id = null, codEditora = 0, titulo = "", resumo = "", autores = []) {
        this._id = _id;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}