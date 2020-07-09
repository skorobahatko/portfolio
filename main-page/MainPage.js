let project = document.getElementById('project');
let projectsArr = [
    {
        url: 'https://github.com/skorobahatko/movie-app-0.1',
        name: 'REACT JS APP WITH MOVIEDB API',
        img: "url=('https://cdn.worldvectorlogo.com/logos/react.svg')"
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
    let div = document.createElement('div');
        div.classList.add('project-div', 'nav-item', 'nav-link');
    if (x.img) {
        // const imgUrl = "url=('"+ x.img + "');";
        div.style.backgroundImage = x.img;
        console.log (x.img)
    }
    div.appendChild(a);
    project.appendChild(div);
}

