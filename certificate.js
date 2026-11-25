printCertBtn.addEventListener('click', () => {
    const recipient = encodeURIComponent(certRecipient.textContent.trim() || nameInput.value.trim());
    const scoreText = encodeURIComponent(scoreHeading.textContent.trim());
    window.open(`certificate.html?name=${recipient}&score=${scoreText}`, '_blank');
});