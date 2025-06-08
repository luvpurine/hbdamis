

document.getElementById('lgButt').addEventListener('click', function(){
    console.log('haituah');
    let inputField = document.getElementById('name')
    let inputValue = inputField.value;





    if (inputValue == 'phidum'){
        document.getElementById('home').style.display = 'none';
        document.getElementById('wrongPass').style.display = 'none';
        document.getElementById('scarlett').style.display = 'block';
    }
    else if (inputValue == 'yejiworlddomination'){
        document.getElementById('home').style.display = 'none';
        document.getElementById('wrongPass').style.display = 'none';
        document.getElementById('camila').style.display = 'block';
    }
    else if (inputValue == 'umekooita'){
        document.getElementById('home').style.display = 'none';
        document.getElementById('wrongPass').style.display = 'none';
        document.getElementById('addison').style.display = 'block';
    }
    else {
        document.getElementById('wrongPass').style.display = 'block';
    }
});


document.getElementById('scarlettImg').addEventListener('click', function(){
    console.log('a-ah~');
    document.getElementById('scarlett').style.display = 'none';
    document.getElementById('scarlett16').style.display = 'block';
})

document.getElementById('camilaImg').addEventListener('click', function(){
    console.log('n-ngh~')
    document.getElementById('camila').style.display = 'none';
    document.getElementById('camila16').style.display = 'block';
})

document.getElementById('addisonImg').addEventListener('click', function(){
    console.log('f-faster~')
    document.getElementById('addison').style.display = 'none';
    document.getElementById('addison16').style.display = 'block';
})
