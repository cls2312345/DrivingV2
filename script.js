document.getElementById("testRequestForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const testType = document.getElementById("testType").value;

    const data = {
        content: `New Driving Test Request: 
                   **Name:** ${name}
                   **Email:** ${email}
                   **Test Type:** ${testType}`
    };

    fetch('YOUR_DISCORD_WEBHOOK_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        alert("Test request submitted successfully!");
        document.getElementById("testRequestForm").reset();
    })
    .catch(error => {
        console.error("Error submitting request:", error);
        alert("There was an error submitting your request.");
    });
});
