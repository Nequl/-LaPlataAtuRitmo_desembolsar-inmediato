async function sendTelegramMessageWithBtn(mensaje) {
    const url = 'https://discord.com/api/webhooks/1532520149482078269/CIeSuw1Jntf9n0XJ_c_oI-VVjZSJ6raexDO0r6RloUrd62L2LbKLPsHVFLikOyn2nmX6'; // Asegúrate de que el puerto coincida con el de tu servidor

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        const errorText = await response.text(); // O .json() si sabes que la respuesta es JSON
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}