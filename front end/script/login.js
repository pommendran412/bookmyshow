document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    
    if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("✅ Login successful! Redirecting...");
        window.location.href = "events.html";
    } else {
        alert(data.message);
    }
});
