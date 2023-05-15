const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const numeroCedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const numeroTelefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
const registroFormularioP = document.getElementById("registro-personas-form")

registroFormularioP.addEventListener("submit", function (event) {
    event.preventDefault()

    const persona = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: numeroCedula.value,
        edad: edad.value,
        telefono: numeroTelefono.value,
        especialidad: especialidad.value
    }

    let personas = []
    let localPersonas = localStorage.getItem("personas")
    if (localPersonas) {
        personas = JSON.parse(localPersonas)
    }

    personas.push(persona)
    localStorage.setItem("personas", JSON.stringify(personas))
    registroFormularioP.reset()
    alert("La persona fue registrada exitosamente")
})