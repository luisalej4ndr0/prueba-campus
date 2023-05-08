export class ListaPiloto extends HTMLElement{
    constructor(){
        super();
        this.render
    }


    render(){
        this.innerHTML= /*html*/`
        <table class="table table-striped">
        <thead>
            <tr>
                <th>fecha registro</th>
                <th>Documento</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th>fecha de nacimineto</th>
                <th>ciudad de origen</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <td>sss </td>
            <td>sss </td>
            <td>sss </td>
            <td>sss </td>
            <td>sss </td>
            <td>sss </td>
            <td>sss </td>
            <td>sss </td>
            <td><button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
            </td>
            
        </tbody>
    </table>
        


        `
    }
}
customElements.define("listado-piloto",ListaPiloto);