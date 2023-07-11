$(document).on("click", "#submit_form", function(e) {
e.preventDefault()
    var name = $('#full_name').val();
    console.log(name)
    console.log(name.length)
    var fname = $('#fname').val();
    console.log(fname)
    console.log(fname.length)
    var mname = $('#mname').val();
    console.log(mname)
    console.log(mname.length)
    var birthdate = $('#birthdate').val();
    console.log(birthdate)
    console.log(birthdate.length)
    var education = $('#EducationQualification').find(":selected").text();
    console.log(education)
    var community = $('#community').find(":selected").text();
    console.log(community)
    var gender = $("input[type='radio'][name='gender']:checked").val();
    console.log(gender)
    var file = $('#myfile').val();
    console.log(file)
    console.log(file.length)


    if (name.length != 0 && fname.length != 0 && mname.length != 0 && birthdate.length != 0 && education != 'Education Qualification' && community != 'Community' && gender != 'undefined' && file.length == 0) {
        alert('Success')
    }
    else{
        $('#error_msg').removeClass('common-none');
    }
});