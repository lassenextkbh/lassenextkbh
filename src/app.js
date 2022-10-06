var lastPage = "1";

let page = document.querySelector('.page');

function pageAnimate(lastPage, newPage) {
    if (parseInt(lastPage) > parseInt(newPage)) {
        console.log(document.getElementById(newPage));
        console.log("navbar shifted left");
    }
    else if (parseInt(lastPage) < parseInt(newPage)) {
        console.log(document.getElementById(newPage));
        console.log("navbar shifted right");
    }
}

document.querySelectorAll('.tab-bar').forEach(function(item){

    let children = Array.from(item.children);
    let circleIndicator = item.querySelector('.tab-bar__circle-indicator');

    if (item.classList.contains('tab-bar-horizontal')) {
        children.forEach((childItem, key) => {
            childItem.addEventListener('click', () => {
                let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${childItem.dataset.theme}`);
                
                pageAnimate(lastPage, childItem.dataset.theme)
                document.getElementById(lastPage).style.visibility = 'hidden';
                document.getElementById(childItem.dataset.theme).style.visibility = "visible";
                lastPage = childItem.dataset.theme;

                circleIndicator.classList.remove('animate');
                circleIndicator.style.marginLeft = ((25 + childItem.clientWidth) * key) + "px";
                circleIndicator.classList.add('animate');
                
                document.querySelector('body').style.backgroundColor = color;
                circleIndicator.style.backgroundColor = color;
            })
        })
    }

})