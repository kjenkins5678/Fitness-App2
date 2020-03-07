$('#submit').on('click', function() {
    let dataObj = {username: `${$('#username').val().trim()}`, password: `${$('#password').val().trim()}`}
    console.log(dataObj)
    // $.ajax({
    //     method: 'POST',
    //     url: '/login',
    //     data: dataObj
    // })
    $.post('/login', dataObj).then(function(res) {
        location.replace(res);
    });
});