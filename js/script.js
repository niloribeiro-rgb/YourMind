const videos = document.querySelector(`#videosContainer`)
const details = document.querySelector(`#detailsLink`)


let videosLinks = []

function verlinks() {
    let texto = ""
    if (videosLinks.length == 0) {
        alert("sem links")
        return
    }
    for (let i = 0; i < videosLinks.length; i++) {
        texto += `\n${i + 1}. ${videosLinks[i]}`
    }
    alert(texto)
}

function salvarLink() {
    const inputLink = document.querySelector('#inputLink')
    // DEVE ESTAR AQUI o const inputLink nao retire se nao
    //  const inputLink = document.querySelector('#inputLink').value pega o texto e nao o input. 

    let newLink = inputLink.value
    if (newLink.length < 48) {
        alert(`Opps! link nao tem 48 carecteres. Tem ${newLink.length} caracteres.`)
        inputLink.value = ""
        return
    }
    if (videosLinks.includes(newLink)) {
        alert(`Opps! ja existe aqui.`)
        inputLink.value = ""
        return
    }
    videosLinks.push(newLink)
    adicionarVideo()
    details.open = false
    inputLink.value = ""
}


adicionarVideo()

function adicionarVideo() {
    if (videosLinks.length == 0) {
        // alert("Sem videos salvos")
        videos.innerHTML = `<h1 style="color:white;">salve videos do youtube pelo +</h1>`
        return
    }
    videos.innerHTML = ""


    // let videoCode = ["GwaRztMaoY0?"]
    let videoCode = []

    // console.log(videosLinks[0].length)
    // console.log(videosLinks[0][17])
    // console.log(videosLinks[0][28])

    for (let c = 0; c < videosLinks.length; c++) {
        let gettingCoode = ""
        for (let i = 0; i < 30; i++) {
            //  if(videosLinks[0] >= 17 && videosLinks[0] <=28){ errei
            if (i >= 17 && i <= 28) {
                gettingCoode += `${videosLinks[c][i]}`
            }
        }
        console.log(gettingCoode)
        videoCode.push(gettingCoode)
        console.log(c)
        console.log(videoCode[c])

    }
    // alert(videoCode)
    // alert(gettingCoode)

    // tamanho da tela
    // tamanho do video 16/9
    // regra de tres telaWidth / x = 16 / 9

    let telaWidth = Number(window.innerWidth)
    let videoWidth = 0
    let videoHeight = 0
    // vw ou %
    let vw = 0
    // relacionado com css
    if (telaWidth <= 480) {
        console.log(telaWidth)
        vw = 90
        videoWidth = Math.round(telaWidth * vw / 100)
        videoHeight = Math.round((videoWidth * 9) / 16)

    }
    if (telaWidth >= 481 & telaWidth <= 1024) {
        console.log(telaWidth)
        let px = 230
        // regra de tres telaWidth / px = 100 / porcento
        vw = Math.round((px * 100) / telaWidth)
        console.log(`vw ${vw}`)
        videoWidth = Math.round(telaWidth * vw / 100)
        videoHeight = Math.round((videoWidth * 9) / 16)
    }
    if (telaWidth >= 1025) {
        console.log(telaWidth)
        vw = 29
        videoWidth = Math.round(telaWidth * vw / 100)
        videoHeight = Math.round((videoWidth * 9) / 16)
    }
    document.documentElement.style.setProperty('--heightCards', `${videoHeight}px`)
    console.log(videoWidth)
    console.log(videoHeight)

    for (let i = 0; i < videoCode.length; i++) {
        const cardVideo = document.createElement(`div`)
        cardVideo.className = "cards"

        cardVideo.innerHTML += `<iframe width="${videoWidth}" height="${videoHeight}" src="https://www.youtube.com/embed/${videoCode[i]}?autoplay=1" allowfullscreen allow="autoplay" ></iframe>`
        // cardVideo.innerHTML += "<h2>Um traller</h2>"
        const videoEdit = document.createElement(`div`)
        videoEdit.className = "videoEdit"
        const buttonsEdit = document.createElement(`div`)
        buttonsEdit.className = "buttonsEdit"
        buttonsEdit.innerHTML = `<button onclick="deleteVideo(${i})" class="deleteButton"><img src="assets/icons/garbage.svg" alt=""></img></button>`
        // const deleteButton = document.createElement(`button`)
        // deleteButton.innerHTML = ``
        // deleteButton.className = "deleteButton"
        // deleteButton.onclick = deleteVideo

        // buttonsEdit.appendChild(deleteButton)
        videoEdit.appendChild(buttonsEdit)
        cardVideo.appendChild(videoEdit)

        videos.appendChild(cardVideo.cloneNode(true))
    }
}

function deleteVideo(index) {
    // alert(index)
    videosLinks.splice(index, 1)
    adicionarVideo()
}

const galeriaContainer = document.querySelector('.galeriaContainer')
// eu tinha colocado \ em vez de /
let persogensLinks = ["assets/forteJujutsu.png",
    "assets/personagensDoJujutsu.png",
    "assets/jujutsu1tp.png"]
let monstrosLinks = ["assets/Mahoraga.jpg"]

function todosGaleria() {

    galeriaContainer.innerHTML = ""
    for (let i = 0; i < persogensLinks.length; i++) {
        galeriaContainer.innerHTML += `<img src="${persogensLinks[i]}" alt="">`
    }
    for (let i = 0; i < monstrosLinks.length; i++) {
        galeriaContainer.innerHTML += `<img src="${monstrosLinks[i]}" alt="">`
    }
}

function personagensGaleria() {
    galeriaContainer.innerHTML = ""
    for (let i = 0; i < persogensLinks.length; i++) {
        galeriaContainer.innerHTML += `<img src="${persogensLinks[i]}" alt="">`
    }
}

function montrosGaleria() {
    galeriaContainer.innerHTML = ""
    for (let i = 0; i < monstrosLinks.length; i++) {
        galeriaContainer.innerHTML += `<img src="${monstrosLinks[i]}" alt="">`
    }
}
