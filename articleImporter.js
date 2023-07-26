async function getArticle (articleName) {
    let res = await fetch(`articles/${articleName}.html`)
    let textRes = await res.text()
    return textRes
};
async function mainProcess() {
    let articles = document.getElementsByClassName("article")
    for (let articleP of articles) {
        let htmlArticle = await getArticle(articleP.id)
        console.log(htmlArticle)
        articleP.innerHTML = htmlArticle
    }
}
mainProcess()
