function showPic(_pic){
    if (_pic != ''){
        document.getElementById('bigPic').style.visibility = 'visible';
        document.getElementById('pic').src = _pic;
    }else{
        document.getElementById('bigPic').style.visibility = 'hidden';
    }
}