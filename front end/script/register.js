document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    
    if (response.ok) {
        alert("✅ Registration successful! Redirecting to login...");
        window.location.href = "index.html";
    } else {
        alert(data.message);
    }
});
