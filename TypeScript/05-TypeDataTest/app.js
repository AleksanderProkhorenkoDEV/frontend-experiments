var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var admin = {
    name: 'Jhon',
    lastName: 'Smith',
    role: [1, 'Admin'],
};
var developer = {
    name: 'Jose',
    lastName: 'Cabrera',
    role: [2, 'Developer'],
};
var editor = {
    name: 'Will',
    lastName: 'Doe',
    role: [3, 'Editor'],
};
var POSTS = [
    {
        id: 1,
        title: 'Aprender TypeScript',
        createdAt: '03/03/2020',
        author: developer,
    },
    {
        id: 2,
        title: 'Aprender JavaScript',
        createdAt: '18/03/2020',
        author: editor,
    },
    {
        id: 3,
        title: 'Es realmente TypeScript útil?',
        createdAt: '18/05/2020',
        author: admin,
    },
];
var postLog = {};
function isAdmin(person) {
    var _a = person.role, role = _a[0], roleName = _a[1], rest = _a.slice(2);
    return role === 1 && roleName === 'Admin';
}
function notHasPermissionLog(_a, _b) {
    var name = _a.name, role = _a.role;
    var title = _b.title;
    console.log("User ".concat(name, " with the role ").concat(role[1], " has no permission to edit the post ").concat(title));
}
for (var index = 0; index < POSTS.length; index++) {
    var post = POSTS[index];
    if (isAdmin(post.author)) {
        if (!(post.id in postLog)) {
            postLog[post.id] = {
                oldPost: post,
                edittedBy: admin,
                edittedAt: Date.now(),
                newPost: __assign(__assign({}, post), { title: '¿Es realmente TypeScript útil?', author: admin }),
            };
        }
    }
    else {
        notHasPermissionLog(post.author, post);
    }
}
console.log(postLog);
