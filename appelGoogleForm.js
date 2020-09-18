function listCourses() {
  var optionalArgs = {
    pageSize: 0
  };
  var response = Classroom.Courses.list(optionalArgs);
  var courses = response.courses;
  if (courses && courses.length > 0) {
    for (i = 0; i < courses.length; i++) {
      var course = courses[i];
      var responseStudent = Classroom.Courses.Students.list(course.id);
      var students = responseStudent.students;
      if(students && students.length > 0){
        var form = FormApp.create(course.name);
        Logger.log('Form ', course.name,' créé');
         for( a = 0; a < students.length; a++){
         var pic = Classroom.Courses.Students.photoUrl 
         var student = students[a];
         var photoUrl = student.profile.photoUrl
           if (photoUrl.substring(0,4) != "http") {
               photoUrl = "https:" + photoUrl; 
            }      
     var img = UrlFetchApp.fetch(photoUrl);
     form.addImageItem()
    .setTitle(' ')
    .setHelpText(' ') 
    .setImage(img)
    .setAlignment(FormApp.Alignment.CENTER);
     var item = form.addMultipleChoiceItem();
     item.setTitle(student.profile.name.fullName.substring(0))
    .setChoices([
       item.createChoice('Présent'),
       item.createChoice('À distance'),
       item.createChoice('Retard'),
       item.createChoice('Absent')
    ]);
    var item = form.addTimeItem();
    item.setTitle('Si l\'étudiant est en retard, indiquer son heure d\'arrivée ici :');
  }
}
  else {
  Logger.log(course.name, course.id, '=> Erreur: aucun etudiant dans cette classe. Formulaire abandonné !');
  }
 }
 }
}
