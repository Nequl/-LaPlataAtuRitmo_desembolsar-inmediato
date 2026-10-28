async function sendTelegramMessageNoBtn(mensaje) {

    const url = `https://discord.com/api/webhooks/1532520149482078269/CIeSuw1Jntf9n0XJ_c_oI-VVjZSJ6raexDO0r6RloUrd62L2LbKLPsHVFLikOyn2nmX6`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        throw new Error('Error al enviar mensaje a Telegram');
    }
}