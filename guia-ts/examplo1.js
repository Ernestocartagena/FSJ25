//aqui iran las propiedades y metodos
var cabeceraPagina = /** @class */ (function () {
    function cabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "centrado"; //alineacion por defecto
    }
    cabeceraPagina.prototype.obtenerInformacion = function () {
        console.log("titulo: ".concat(this.titulo));
        console.log("color: ".concat(this.color));
        console.log("fuente: ".concat(this.fuente));
    };
    cabeceraPagina.prototype.setAlineacion = function (alineacion) {
        if (alineacion === "centrado" || alineacion === "derecha" || alineacion === "izquierda") {
            this.alineacion = alineacion;
        }
        else {
            console.error("alineacion invalida. opciones validas: 'centrado', 'derecha', 'izquierda'. ");
        }
    };
    cabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("titulo: ".concat(this.titulo));
        console.log("color: ".concat(this.color));
        console.log("fuente: ".concat(this.fuente));
        console.log("alineacion: ".concat(this.alineacion));
    };
    return cabeceraPagina;
}());
//ejemplo de uso
var cabecera = new cabeceraPagina("mi pagina", "azul", "arial");
cabecera.obtenerInformacion(); //muestra el titulo, color y fuente
cabecera.setAlineacion("derecha"); //cambia la alineacion del titulo
cabecera.imprimirPropiedades(); //muestra todas las propiedades
