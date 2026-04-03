The addmin page is located at 

https:XanaduKink/XR/admin.html

Here's what the admin page does:

Auth-gated — only the emails in the variables ADMIN_EMAILS can access it (edit the ADMIN_EMAILS array at the top of the script to add more admins)

Three tabs — Pending, Approved, Rejected

Pending applications show all form fields with two buttons:

Approve & Create Account — creates a Firebase Auth account using a secondary app instance (so you stay logged in), sets their display name, sends them a password reset email so they can choose their own password, and marks the application as approved

Reject — marks the application as rejected

If the applicant already has an account, it just approves the application without erroring

The page is marked noindex, nofollow so search engines won't find it, and there's no link to it in the nav — you access it directly at /admin.html.

