var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero, autor) {
        this.titulo = titulo;
        this.genero = genero;
        this._autor = autor;
    }
    Object.defineProperty(Cancion.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        set: function (autor) {
            this._autor = autor;
        },
        enumerable: false,
        configurable: true
    });
    Cancion.prototype.mostrarDatos = function () {
        console.log("Cancion: ".concat(this.titulo));
        console.log("Genero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
//crea una estancia de la clase cancion
var miCancion = new Cancion("Bohemian Rhapsody", "rock", "Queen");
//imprime los datos de la cancion
miCancion.mostrarDatos();
//modifica el autor de la cancion
miCancion.autor = "Freddy Mercury";
//imprime los datos de la cancion nuevamente 
miCancion.mostrarDatos();
