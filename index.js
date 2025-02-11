

document.getElementById('lgButt').addEventListener('click', function(){
    console.log('haituah');
    let inputField = document.getElementById('name')
    let inputValue = inputField.value;





    if (inputValue == 'phidum'){
        document.getElementById('home').style.display = 'none';
        document.getElementById('wrongPass').style.display = 'none';
        document.getElementById('scarlett').style.display = 'block';
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