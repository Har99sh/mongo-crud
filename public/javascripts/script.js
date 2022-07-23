var form = $('#post_form');

form.on('submit', function (e) {
    e.preventDefault();
    var text = $('#text').val();
    var image = $('#image').val();
    var likes = $('#likes').val();
    var tags = $('#tags').val();
    var owner = $('#owner').val();
});

