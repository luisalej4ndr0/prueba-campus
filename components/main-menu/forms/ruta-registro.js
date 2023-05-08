export class RegistrarRuta extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/`
         <div class="card">
        <h5 class="card-header">Registro de rutas</h5>
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
                                    <label for="nombreRuta" class="form-label">Nombre de la ruta</label>
                                    <input type="text" class="form-control" id="nombreRuta" name="nombreRuta">
                                </div>
                                <div class="col-3">
                                    <label for="ciudad" class="form-label">Ciudad de abordaje</label>
                                    <input type="text" class="form-control" id="ciudad" name="ciudad">                  
                                </div>
                                <div class="col-3">
                                    <label for="ciudadDestino" class="form-label">Ciudad de Destino</label>
                                    <input type="text" class="form-control" id="ciudadDestino" name="ciudadDestino">                  
                                </div>
                            </div>
                            <div class="row g-3">
                                <div class="col-4">
                                    <label for="totalMillas" class="form-label">total de millas </label>
                                    <input type="number" class="form-control" id="totalMillas" name="totalMillas">
                                </div>
                                <div class="col-4">
                                    <label for="valorMilla" class="form-label">valor de milla</label>
                                    <input type="date" class="form-control" id="valorMilla" name="valorMilla">                  
                                </div>
    
                               
                                <div class="container mt-4 text-center" >
                                    <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar Clientes">
                                </div>
                            </div>
                        </form>                         
                </div>
            </div>
        </div>
            
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
customElements.define("formulario-rutas",RegistrarRuta);