document.getElementById('search-button').addEventListener('click', () => {
    const name = document.getElementById('character-name').value;
    const status = document.getElementById('status-filter').value;
    fetchCharacters(name, status);
});

function fetchCharacters(name, status) {
    let url = 'https://rickandmortyapi.com/api/character/?';
    
    if (name) {
        url += `name=${name}&`;
    }
    
    if (status) {
        url += `status=${status}&`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => displayCharacters(data.results))
        .catch(error => console.error('Error fetching data:', error));
}

function displayCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = ''; 

    if (characters.length === 0) {
        characterList.innerHTML = '<p>No characters found.</p>';
        return;
    }

    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.classList.add('character-item');
        characterItem.innerHTML = `
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <img src="${character.image}" alt="${character.name}">
        `;
        characterList.appendChild(characterItem);
    });
}
