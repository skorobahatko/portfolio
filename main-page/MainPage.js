let projectUl = document.getElementById('projectUL');
let projectsArr = [
    {
        url: 'https://github.com/skorobahatko/movie-app-0.1',
        name: 'test movie site by moviedb api'
    },
    {
        url: '#',
        name: 'its all now('
    }
];

for (let x of projectsArr) {
    let a = document.createElement('a');
    a.href = x.url;
    a.innerText = x.name;
    let li = document.createElement('li');
    li.classList.add('project-li');
    li.appendChild(a);
    projectUl.appendChild(li);
}

