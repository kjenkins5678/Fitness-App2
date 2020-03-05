$('#new_user_submit').on("click", function() {
    event.preventDefault();
    if (!$('#new-user-name').val() || !$('#new-password').val() || !$('#age').val() || !$('#height-in').val()  || !$('#weight-lb').val()) {
        $('#submit-row').append('<p>Please Fill Out All Fields</p>');
    } else {
        let uAge = parseInt($('#age').val().trim());
        let uHeight = parseInt($('#height-in').val().trim());
        let uWeight = parseInt($('#weight-lb').val().trim());
        let newUser = {
            user_name: `${$('#new-user-name').val().trim()}`,
            password: `${$('#new-password').val().trim()}`,
            age: uAge,
            height_inches: uHeight,
            // height_cm: null,
            weight_lb: uWeight,
            // weight_kg: null,
            gender: `${$('#gender').val().trim()}`,
            activity_level: `${$('#activity-level').val().trim()}`,
            goal: `${$('#goal').val().trim()}`
            // calories_per_day: null,
            // fat_per_day: null,
            // carbs_per_day: null,
            // protein_per_day: null
        };
        $.post('/api/newUser', newUser).then(function(dbUser) {
            console.log(`Successfully added ${dbUser}`);
            location.replace('/logpage');
        })
    }
});

    // $('#new_user_submit').on('click', function() {
    //     location.replace('/logpage');
    // });