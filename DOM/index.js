async function getmunicipios(uf) {
    const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios"
    );
    const data = await response.json();
    return data.map((municipio) => municipio.nome);
}


function optionSelected() {
    const selectElement = document.getElementById("select");
    const uf = selectElement.value;

    const listamunicipios = document.getElementById("municipios");
    while (listamunicipios.firstChild) {
        listamunicipios.firstChild.remove();
    }
    getmunicipios(uf).then((municipios) => {
        const listamunicipios = document.getElementById("municipios");
        for (let i = 0; i < municipios.length; i++) {
            const municipio = municipios[i];
            const li = document.createElement("li");
            li.innerHTML = municipio;
            li.classList.add("cidades");
            listamunicipios.appendChild(li);
        }
    });
}
