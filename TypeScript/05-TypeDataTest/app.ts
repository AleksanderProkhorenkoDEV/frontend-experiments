interface Role {
    name: string,
    lastName: string,
    role: [number, string]
}

const admin: Role = {
    name: 'Jhon',
    lastName: 'Smith',
    role: [1, 'Admin'],
};

const developer: Role = {
    name: 'Jose',
    lastName: 'Cabrera',
    role: [2, 'Developer'],
};

const editor: Role = {
    name: 'Will',
    lastName: 'Doe',
    role: [3, 'Editor'],
};


interface Post {
    id: number,
    title: string,
    createdAt: string,
    author: Role
}

const POSTS: Post[] = [
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

type EditedPost = {
    oldPost: Post,
    edittedBy: Role,
    edittedAt: number,
    newPost: Post
}

const postLog: Record<number, EditedPost> = {};

function isAdmin(person: Role) {

    const [role, roleName, ...rest] = person.role;

    return role === 1 && roleName === 'Admin';
}

function notHasPermissionLog({ name, role }: Role, { title }: Post) {
    console.log(`User ${name} with the role ${role[1]} has no permission to edit the post ${title}`);
}

for (let index = 0; index < POSTS.length; index++) {
    const post = POSTS[index];
    if (isAdmin(post.author)) {
        if (!(post.id in postLog)) {
            postLog[post.id] = {
                oldPost: post,
                edittedBy: admin,
                edittedAt: Date.now(),
                newPost: {
                    ...post, // Copia profunda del post original
                    title: '¿Es realmente TypeScript útil?',
                    author: admin,
                },
            };
        }
    } else {
        notHasPermissionLog(post.author, post);
    }
}

console.log(postLog);