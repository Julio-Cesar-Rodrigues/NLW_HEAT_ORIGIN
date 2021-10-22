const linksSocialMedia = {
  github: 'Julio-Cesar-Rodrigues',
  instagram: 'jullio_czar',
  facebook: 'julio.c.rodrigues.16'
}

function changeSocialMediaLinks() {
  //recebe a tag ul, recebe as tags filhas e armazena elas na let li
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class') //recebe a class da tag li e armazena na const social
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` //recebe a posição 0 (a posição 0 é a tag a) das filhas de li e da um novo href a ela

    //ela coloca o nome da tag social(que é o nome da class da tag) no link como o site, e procura o que é referente a ela na const linksSocialMedia
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //função fetch vai ate a url e recebe alguma infomação (nesse caso ela recebe o json da url)
  //o then recebe a informação e transforma ela em json
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
