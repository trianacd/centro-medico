function mostrarDoctores() {
    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if (localDoctores) {
        doctores = JSON.parse(localDoctores)
    }
    const tablaDoctores = document.getElementById("tabla-doctores")
    const cuerpoTabla = tablaDoctores.getElementsByTagName("tbody")[0]
    doctores.forEach(doctores => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreDoctor = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()

        celdaNombreDoctor.textContent = doctores.nombre
        celdaApellido.textContent = doctores.apellido
        celdaNumeroCedula.textContent = doctores.cedula
        celdaEspecialidad.textContent = doctores.especialidad
        celdaConsultorio.textContent =doctores.consultorio
        celdaCorreo.textContent =doctores.correo
       
    });
}
mostrarDoctores()