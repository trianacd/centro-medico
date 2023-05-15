const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const numeroCedula = document.getElementById("cedula")
const especialidad = document.getElementById("especialidad")
const numeroConsultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
const registroFormulario = document.getElementById("registro-doctores-form")

registroFormulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const doctor = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: numeroCedula.value,
        especialidad: especialidad.value,
        consultorio: numeroConsultorio.value,
        correo: correo.value
    }

    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if (localDoctores) {
        doctores = JSON.parse(localDoctores)
    }

    doctores.push(doctor)
    localStorage.setItem("doctores", JSON.stringify(doctores))
    registroFormulario.reset()
    alert("El doctor fue registrado")
})