function generateCertificate() {
    var fullName = document.getElementById("fullName").value;
    var certificateText = `Дорогой(ая) ${fullName},\n\nВы успешно застрахованы от "скучных" подарков на 23 февраля. Сегодня в течение дня на вашу почту придёт документ, подтверждающий завершение страхования (подарок).`;
    document.getElementById("certificate").innerText = certificateText;
}
