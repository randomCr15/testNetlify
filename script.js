function generateQRCode() {
    var text = document.getElementById("textInput").value;
    var qrCodeDiv = document.getElementById("qrCode");

    if (text === "") {
        qrCodeDiv.innerHTML = "Ingrese un texto o URL válido.";
        return;
    }

    qrCodeDiv.innerHTML = "";

    var qrCode = new QRCode(qrCodeDiv, {
        text: text,
        width: 500,
        height: 500
    });
}
