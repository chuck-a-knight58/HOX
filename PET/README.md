# Power Exchange Together (P.E.T.) — Leadership Site

Static HTML site for the P.E.T. international chapter leadership, backed by Firebase
(Authentication + Cloud Firestore + Storage). Modeled on the sibling `../XR/` site.

## Pages
| Page | Access | Purpose |
|------|--------|---------|
| `index.html` | Public | Landing / mission |
| `chapters.html` | Public | **Active P.E.T. Chapters** directory — rendered from the static `chapters.json` file (no database) |
| `about.html`, `contact.html` | Public | Info + contact form |
| `join.html` | Public | Leadership application → `applications` (status `pending`) |
| `login.html` | Public | Email/password sign-in |
| `library.html` | Leaders | Teaching materials, meeting-topic notes, presentation resources |
| `profile.html` | Leaders | Edit own `leaders/{uid}` profile |
| `change_password.html` | Leaders | Change password (re-auth) |
| `admin.html` | Admins | Approve applications, manage chapters + library |

## One-time Firebase setup
1. Create a Firebase project (already wired: **`pet-leadership`** in `firebase-config.js`).
2. In the console enable: **Authentication → Email/Password**, **Cloud Firestore**, **Storage**.
3. Deploy security rules:
   ```
   cd PET
   firebase use pet-leadership
   firebase deploy --only firestore:rules,storage
   ```
## Updating the chapter directory
The **Active P.E.T. Chapters** list lives in **`chapters.json`** — a plain static file, no database.
To add, remove, or edit a chapter, edit that file and redeploy the site. `chapters.html` fetches it at
load time and groups entries by the `region` field (display order set by `regionOrder`).

## Admins
Admin emails are defined in **three** places that must stay in sync:
- `firebase-config.js` → `PET_ADMIN_EMAILS` (controls admin UI)
- `firestore.rules` → `isAdmin()` (enforces data access)
- `storage.rules` → `isAdmin()` (enforces file access)

## Account creation flow (apply → approve)
1. Prospective leader submits `join.html` → an `applications` doc is created with `status: 'pending'`.
2. An admin opens `admin.html → Applications` and clicks **Approve & create account**.
3. The app creates the Firebase Auth user via a *secondary* app instance (so the admin stays
   signed in), writes a `leaders/{uid}` profile, marks the application `approved`, and emails the
   applicant a password-setup link.
4. The new leader follows the email, sets a password, and logs in at `login.html`.

## Local preview
```
cd PET
python3 -m http.server 8000
# open http://localhost:8000/index.html
```
Auth/Firestore calls require the live Firebase project; the chapters page renders from its embedded
fallback list even without connectivity.
