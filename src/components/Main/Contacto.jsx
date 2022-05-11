 import React from 'react'
 
 const Contacto = () => {
   return (
     <div>
       <div className="col-lg-3"></div>
        <div className="col-lg-6 col-12">
          <h2 id="h2Contacto">Crear Usuario</h2>

          <form className="row g-3" id="usuario" action="javascript: enviar()">
            <div className="col-lg-6">
              <label for="inputEmail4" className="form-label">Email*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="inputPassword4" className="form-label">Contraseña*</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">Direccion*</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder=" Ej: Vera Mujica 554"
                required
              />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label"
                >Nr° de Piso y Apartamento</label
              >
              <input
                type="text"
                className="form-control"
                id="floor"
                placeholder="Ej: 6° C"
              />
            </div>
            <div className="col-lg-6">
              <label for="inputCity" className="form-label">Ciudad*</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Ej: Cordobá"
                required
              />
            </div>
            <div className="col-lg-4">
              <label for="inputState" className="form-label">Provincia*</label>
              <select id="state" className="form-select" required>
                <option value>Provincia</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Capital Federal">CABA</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
                <option value="Tucuman">Tucuman</option>
              </select>
            </div>
            <div className="col-2"></div>
            <div className="col-lg-12 col-8">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label className="form-check-label" for="gridCheck">
                  Acepto Terminos Y Condiciones*
                </label>
              </div>
              <div></div>
            </div>
            <div className="col-lg-12">
              <button type="submit" className="btn btn-primary" id="btn1">
                Enviar
              </button>
            </div>
            <div className="mb-3">
              <button type="reset" className="btn btn-primary">Restablecer</button>
            </div>
          </form>
        </div>
        <div className="col-lg-3"></div>
     </div>
   )
 }
 
 export default Contacto