var lastPage = "1";

let page = document.querySelector('.page');

function pageAnimate(lastPage, newPage) {
    let newPageElement = document.getElementById(newPage);
    let lastPageElement = document.getElementById(newPage);
    newPageElement.classList.remove("animate__leftIn");
    lastPageElement.classList.remove("animate__leftIn");
    newPageElement.classList.remove("animate__rightIn");
    lastPageElement.classList.remove("animate__rightIn");

    if (parseInt(lastPage) > parseInt(newPage)) {
        setTimeout(() => {
        newPageElement.classList.add("animate__leftIn");
        document.getElementById(newPage).style.visibility = "visible";
        document.getElementById(lastPage).style.visibility = 'hidden';
        }, 0.1);
    }
    else if (parseInt(lastPage) < parseInt(newPage)) {
        setTimeout(() => {
        newPageElement.classList.add("animate__rightIn");
        document.getElementById(newPage).style.visibility = "visible";
        document.getElementById(lastPage).style.visibility = 'hidden';
        }, 0.1);
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
                //document.getElementById(childItem.dataset.theme).style.visibility = "visible";
                //document.getElementById(lastPage).style.visibility = 'hidden';
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