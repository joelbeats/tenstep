
function toggleVisibility(article) {
    
    hideAllArticles()
    let div = document.getElementById(`#${article}`) // #twelve-steps ("#" + article)
    div.classList.remove('.hide-me')
    div.classList.add('.show-me')
    console.log('toggle')
    
}



function hideAllArticles() 
{   
    let article = document.getElementById('content');
    var articles = document.getElementsByClassName('art-main');
    articles.forEach(article => {
    article.classList.add('.hide-me')
    })
    console.log('hide all')
}



function showLandingpage() {
    hideAllArticles()
    let landingpage = document.querySelector('#art-about-addiction');
    landingpage.classList.add('.show-me');
    console.log('show landingpage')
}

hideAllArticles()
showLandingpage()