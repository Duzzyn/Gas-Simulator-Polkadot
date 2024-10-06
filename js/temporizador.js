function iniciarTemporizador(intervalo, temporizador) {
    if (intervalo) {
        clearInterval(intervalo)
    }

    temporizador = 5;
    document.getElementById('temporizador').textContent = `Expira em: ${temporizador}s`

    intervalo = setInterval(() => {
        temporizador--;
        document.getElementById('temporizador').textContent = `Expira em: ${temporizador}s`
        if (temporizador <= 0) {
            clearInterval(intervalo)
            location.reload()
        }
    }, 1000);
}

export default iniciarTemporizador;