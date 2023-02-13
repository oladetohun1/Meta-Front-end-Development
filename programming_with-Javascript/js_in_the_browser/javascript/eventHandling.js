//event listener demonstration

const target = document.querySelector('body')

function handleClick(){
    console.log('body clicked');
}

target.addEventListener('click', handleClick);
