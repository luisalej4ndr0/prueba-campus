export class RegistrarAvion extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/`
         <div class="card">
        <h5 class="card-header">Registro de Aereonave</h5>
        <div class="card-body">
            <div class="container">
                <div class="row g-3">
                    <div class="col-12">
                        <form id = "frmData">
                            <div class="row g-3">
                                <div class="col-3">
                                    <label for="createdAt" class="form-label">Fecha registro</label>
                                    <input type="date" class="form-control" id="createdAt" name="createdAt">                  
                                </div>
                                <div class="col-3">
                                    <label for="nroAeronave" class="form-label">Numero de aereonave</label>
                                    <input type="text" class="form-control" id="nroAeronave" name="nroAeronave">
                                </div>
                                <div class="col-3">
                                    <label for="cantidadPasajeros" class="form-label">cantida de Pasajeros</label>
                                    <input type="Number" class="form-control" id="cantidadPasajeros" name="cantidadPasajeros">                  
                                </div>
                                <div class="col-3">
                                    <label for="valorCompra" class="form-label">valor Compra</label>
                                    <input type="text" class="form-control" id="valorCompra" name="valorCompra">                  
                                </div>
                            </div>                        
    
    `
    this.saveData();
    }
    saveData= () =>{
       
            let myForm = document.querySelector("#frmData");
            myForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.target));
                opc[e.submitter.dataset.accion](data)    
            })
    }
}
customElements.define("formulario-avion",RegistrarAvion);