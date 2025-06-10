let user = {
    id: 1,
    name: 'Goku',
    edad: 45,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['Dragón', 'Oso panda', 'Tigre'];
for (let index in animales) {
    console.log(index, animales[index]);
}