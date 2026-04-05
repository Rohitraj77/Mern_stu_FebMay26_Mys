// Basics of RBAC
const routePermissions = {
    "/admin": ["admin"],
    "/reports": ["admin", "manager"],
    "/profile": ["admin", "manager", "user"]
};

function canAccess(route, role) {
    const allowedRoles = routePermissions[route]||[];
    return allowedRoles.includes(role);
}
console.log("User access to /admin: ",canAccess("/admin","user"));
console.log("Admin can access to /admin: ",canAccess("/admin","admin"));
console.log("Manager can access to /reports: ",canAccess("/reports","manager"));
console.log("User can access to /profile: ",canAccess("/profile","user"));
