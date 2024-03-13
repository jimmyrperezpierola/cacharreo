// Función para obtener la dirección IP pública
function obtenerDireccionIPPública() {
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip)
        .catch(error => {
            console.error('Error al obtener la dirección IP pública:', error);
            return null;
        });
}

// Función para obtener el nombre de la máquina
function obtenerNombreDeMaquina() {
    return window.location.hostname;
}

// Uso de las funciones para obtener la dirección IP pública y el nombre de la máquina
async function obtenerInformacionDeRed() {
    const ipPublica = await obtenerDireccionIPPública();
    const nombreDeMaquina = obtenerNombreDeMaquina();

    console.log('Dirección IP Pública:', ipPublica);
    console.log('Nombre de la Máquina:', nombreDeMaquina);
}

// Llamada a la función principal
obtenerInformacionDeRed();
