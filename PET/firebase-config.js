// =============================================================
// Firebase Configuration for Power Exchange Together (P.E.T.)
// =============================================================
// INSTRUCTIONS: Create a NEW Firebase project for P.E.T. at
// https://console.firebase.google.com, enable Email/Password
// Authentication, Cloud Firestore, and Storage, then paste the
// web app config below (Project Settings → General → Your apps).
// =============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCtc67NOBVgiLCs3PiLE9wAmnriKAuKiD0",
  authDomain: "pet-leadership.firebaseapp.com",
  projectId: "pet-leadership",
  storageBucket: "pet-leadership.firebasestorage.app",
  messagingSenderId: "244699260111",
  appId: "1:244699260111:web:98141044904495708703ba",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Shared references (storage is optional — only present if the SDK is loaded)
const auth = firebase.auth();
const db = firebase.firestore();
const storage = (typeof firebase.storage === 'function') ? firebase.storage() : null;

// ---- Auth State UI Helper ----
// Call this on any page to update nav elements based on login state.
// Expects elements with these IDs (all optional — won't error if missing):
//   #auth-link       – an <a> tag whose text/href toggles Login ↔ Logout
//   #auth-user-name  – a <span> that shows the logged-in user's display name or email
//   #auth-gated      – a container that is hidden when not logged in
//   #login-prompt    – a container shown only when logged out

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
            if (isPetAdmin(user)) {
                document.body.classList.add('pet-admin');
            } else {
                document.body.classList.remove('pet-admin');
            }

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
            document.body.classList.remove('pet-admin');

            // Redirect auth-required links to the login page
            document.querySelectorAll('.auth-required').forEach(function (el) {
                if (!el.dataset.href) {
                    el.dataset.href = el.href;
                }
                el.href = '#';
                el.onclick = function (e) {
                    e.preventDefault();
                    window.location.href = 'login.html';
                };
            });
        }
    });
}

// ---- Admin allow-list (client-side convenience only) ----
// Real enforcement lives in firestore.rules / storage.rules. This is used
// purely to show/hide admin UI. Keep this list in sync with the rules.
var PET_ADMIN_EMAILS = [
    'chuck@xanadukink.com',
    'chuck.a.knight@gmail.com',
    'l.knight@me.com'
];

function isPetAdmin(user) {
    return !!(user && user.email && PET_ADMIN_EMAILS.indexOf(user.email.toLowerCase()) !== -1);
}
