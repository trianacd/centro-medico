function mostrarPersonas() {
    let personas = []
    let localPersonas = localStorage.getItem("personas")
    if (localPersonas) {
        personas = JSON.parse(localPersonas)
    }
    const tablaPersonas = document.getElementById("tabla-personas")
    const cuerpoTabla = tablaPersonas.getElementsByTagName("tbody")[0]
    personas.forEach(personas => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePersona = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaNumeroTelefono = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()

        celdaNombrePersona.textContent = personas.nombre
        celdaApellido.textContent = personas.apellido
        celdaNumeroCedula.textContent = personas.cedula
        celdaEdad.textContent = personas.edad
        celdaNumeroTelefono.textContent = personas.telefono
        celdaEspecialidad.textContent = personas.especialidad
       
    });
}
mostrarPersonas()