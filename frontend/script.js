// ==========================
// Mobile Navigation Toggle
// ==========================
// const navToggle = document.getElementById("navToggle");
// const nav = document.getElementById("nav");

// if (navToggle && nav) {
//     navToggle.addEventListener("click", () => {
//         nav.classList.toggle("nav-open");
//         navToggle.classList.toggle("open");
//     });
// }

// // ==========================
// // Dynamic Footer Year
// // ==========================
// document.getElementById("year").textContent = new Date().getFullYear();

// // ==========================
// // Contact Form Submission
// // ==========================
// const contactForm = document.getElementById("contactForm");
// if (contactForm) {
//     contactForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const status = document.getElementById("formStatus");
//         status.textContent = "Sending...";

//         try {
//             const formData = new FormData(contactForm);
//             const res = await fetch(contactForm.action, {
//                 method: contactForm.method,
//                 body: formData,
//                 headers: { Accept: "application/json" }
//             });

//             if (res.ok) {
//                 status.textContent = "Message sent successfully!";
//                 contactForm.reset();
//             } else {
//                 status.textContent = "Oops! There was a problem.";
//             }
//         } catch (error) {
//             console.error(error);
//             status.textContent = "Network error. Please try again.";
//         }
//     });
// }

// // ==========================
// // Sign-Up & Login Logic
// // ==========================
// // Example placeholders — Replace with backend calls
// const signupForm = document.getElementById("signupForm");
// const loginForm = document.getElementById("loginForm");

// if (signupForm) {
//     signupForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const email = signupForm.querySelector('input[name="email"]').value;
//         const password = signupForm.querySelector('input[name="password"]').value;

//         // Basic example: save in localStorage (NOT secure, for demo only)
//         localStorage.setItem("user", JSON.stringify({ email, password }));
//         alert("Sign-up successful! You can now log in.");
//         signupForm.reset();
//     });
// }

// if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const email = loginForm.querySelector('input[name="email"]').value;
//         const password = loginForm.querySelector('input[name="password"]').value;

//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (storedUser && storedUser.email === email && storedUser.password === password) {
//             alert(`Welcome back, ${email}!`);
//             // Redirect or show user dashboard
//         } else {
//             alert("Invalid credentials. Please try again.");
//         }
//     });
// }

// // ==========================
// // Optional: Smooth Scroll
// // ==========================
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });





// ==========================
// Sign-Up & Login Logic (Backend Integrated)
// ==========================
// const signupForm = document.getElementById("signupForm");
// const loginForm = document.getElementById("loginForm");

// if (signupForm) {
//     signupForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const email = signupForm.querySelector('input[name="email"]').value;
//         const password = signupForm.querySelector('input[name="password"]').value;

//         try {
//             const res = await fetch("http://localhost:4000/api/signup", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password })
//             });

//             const data = await res.json();
//             if (res.ok) {
//                 alert(data.message || "Sign-up successful! You can now log in.");
//                 signupForm.reset();
//             } else {
//                 alert(data.message || "Error during sign-up.");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Network error. Please try again.");
//         }
//     });
// }

// if (loginForm) {
//     loginForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const email = loginForm.querySelector('input[name="email"]').value;
//         const password = loginForm.querySelector('input[name="password"]').value;

//         try {
//             const res = await fetch("http://localhost:4000/api/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password })
//             });

//             const data = await res.json();
//             if (res.ok) {
//                 alert(`Welcome back, ${data.email || email}!`);
//                 // You could save a token here if backend returns one
//                 // localStorage.setItem("token", data.token);
//                 // window.location.href = "dashboard.html";
//             } else {
//                 alert(data.message || "Invalid credentials.");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Network error. Please try again.");
//         }
//     });
// }






// const signupForm = document.getElementById("signupForm");
// const loginForm = document.getElementById("loginForm");

// if (signupForm) {
//     signupForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const email = signupForm.querySelector('input[name="email"]').value;
//         const password = signupForm.querySelector('input[name="password"]').value;

//         try {
//             const res = await fetch("http://localhost:4000/api/signup", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password })
//             });

//             const data = await res.json();
//             if (res.ok) {
//                 alert(`Sign-up successful! Welcome, ${data.user.email}.`);
//                 localStorage.setItem("token", data.token); // store token for later
//                 signupForm.reset();
//             } else {
//                 alert(data.error || (data.errors?.[0]?.msg) || "Error during sign-up.");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Network error. Please try again.");
//         }
//     });
// }

// if (loginForm) {
//     loginForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const email = loginForm.querySelector('input[name="email"]').value;
//         const password = loginForm.querySelector('input[name="password"]').value;

//         try {
//             const res = await fetch("http://localhost:4000/api/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password })
//             });

//             const data = await res.json();
//             if (res.ok) {
//                 alert(`Welcome back, ${data.user.email}!`);
//                 localStorage.setItem("token", data.token);
//                 // Optionally redirect:
//                 // window.location.href = "dashboard.html";
//             } else {
//                 alert(data.error || (data.errors?.[0]?.msg) || "Invalid credentials.");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Network error. Please try again.");
//         }
//     });
// }




// ==========================
// Nav Toggle
// ==========================
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        navToggle.classList.toggle("open");
    });
}

// ==========================
// Dynamic Footer Year
// ==========================
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ==========================
// Contact Form Submission
// ==========================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const status = document.getElementById("formStatus");
        status.textContent = "Sending...";

        try {
            const formData = new FormData(contactForm);
            const res = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: { Accept: "application/json" }
            });

            if (res.ok) {
                status.textContent = "Message sent successfully!";
                contactForm.reset();
            } else {
                status.textContent = "Oops! There was a problem.";
            }
        } catch (error) {
            console.error(error);
            status.textContent = "Network error. Please try again.";
        }
    });
}

// ==========================
// Sign-Up Logic
// ==========================
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;

        try {
            const res = await fetch("http://localhost:4000/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (res.ok) {
                alert(`Sign-up successful! Welcome, ${data.user.email}.`);
                localStorage.setItem("token", data.token); // Store token
                signupForm.reset();
            } else {
                alert(data.error || (data.errors?.[0]?.msg) || "Error during sign-up.");
            }
        } catch (err) {
            console.error(err);
            alert("Network error. Please try again.");
        }
    });
}

// ==========================
// Login Logic
// ==========================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        try {
            const res = await fetch("http://localhost:4000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (res.ok) {
                alert(`Welcome back, ${data.user.email}!`);
                localStorage.setItem("token", data.token);
                // Optional redirect
                // window.location.href = "dashboard.html";
            } else {
                alert(data.error || (data.errors?.[0]?.msg) || "Invalid credentials.");
            }
        } catch (err) {
            console.error(err);
            alert("Network error. Please try again.");
        }
    });
}

// ==========================
// Smooth Scroll for Anchor Links
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
