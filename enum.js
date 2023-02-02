var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["readOnlyUser"] = 2] = "readOnlyUser";
})(Role || (Role = {}));
console.warn(Role);
