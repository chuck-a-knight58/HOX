// =============================================================
// Firebase Configuration for Xanadu Reserve
// =============================================================
// INSTRUCTIONS: Replace the placeholder values below with your
// actual Firebase project configuration from:
// https://console.firebase.google.com → Project Settings → General → Your apps → Web app
// =============================================================

const firebaseConfig = {
    apiKey: "AIzaSyBvwQ0IuRaCLtBC2V_JklfVCtPJyqdwU2U",
    authDomain: "xanadureserve.firebaseapp.com",
    projectId: "xanadureserve",
    storageBucket: "xanadureserve.firebasestorage.app",
    messagingSenderId: "476192848193",
    appId: "1:476192848193:web:091079b01b4d756d98c9c0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Shared references
const auth = firebase.auth();
const db = firebase.firestore();

// ---- Auth State UI Helper ----
// Call this on any page to update nav elements based on login state.
// Expects elements with these IDs (optional — won't error if missing):
//   #auth-link       – an <a> tag whose text/href toggles Login ↔ Logout
//   #auth-user-name  – a <span> that shows the logged-in user's display name or email
//   #auth-gated      – a container that is hidden when not logged in

function initAuthUI() {
    var authLink = document.getElementById('auth-link');
    var userName = document.getElementById('auth-user-name');
    var gated = document.getElementById('auth-gated');
    var loginPrompt = document.getElementById('login-prompt');

    auth.onAuthStateChanged(function (user) {
        if (user) {
            // Logged in
            if (authLink) {
                authLink.textContent = 'Logout';
                authLink.href = '#';
                authLink.onclick = function (e) {
                    e.preventDefault();
                    auth.signOut().then(function () {
                        window.location.reload();
                    });
                };
            }
            if (userName) {
                userName.textContent = user.displayName || user.email;
                userName.style.display = 'inline';
            }
            if (gated) {
                gated.style.display = 'block';
            }
            if (loginPrompt) {
                loginPrompt.style.display = 'none';
            }
            document.body.classList.add('user-logged-in');

            // Restore real hrefs on auth-required links
            document.querySelectorAll('.auth-required').forEach(function (el) {
                if (el.dataset.href) {
                    el.href = el.dataset.href;
                }
                el.onclick = null;
            });
        } else {
            // Logged out
            if (authLink) {
                authLink.textContent = 'Login';
                authLink.href = 'login.html';
                authLink.onclick = null;
            }
            if (userName) {
                userName.textContent = '';
                userName.style.display = 'none';
            }
            if (gated) {
                gated.style.display = 'none';
            }
            if (loginPrompt) {
                loginPrompt.style.display = 'block';
            }
            document.body.classList.remove('user-logged-in');

            // Redirect auth-required links to login page
            document.querySelectorAll('.auth-required').forEach(function (el) {
                if (!el.dataset.href) {
                    el.dataset.href = el.href;
                }
                el.href = '#';
                el.onclick = function (e) {
                    e.preventDefault();
                    var prefix = '';
                    var path = window.location.pathname;
                    if (path.indexOf('/events/') !== -1) {
                        prefix = '../../';
                    }
                    window.location.href = prefix + 'join.html';
                };
            });
        }
    });
}
