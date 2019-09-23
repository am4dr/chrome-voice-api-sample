
function newRecognition() {
    const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
    return new SpeechRecognition();
}

function recAsync() {
    return new Promise((resolve, reject) => {
        const rec = newRecognition();
        rec.onresult = (event) => {
            resolve(event);
        };
        rec.start();
    });
}
