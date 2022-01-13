const routes = {};
routes.auth = require('./auth.route');
routes.post = require('./post.route');
routes.slide = require('./slide.route');
routes.albumGallery = require('./album-gallery.route');
routes.general = require('./general.route');
routes.menu = require('./menu.route');
routes.public = require('./public.route');
routes.seeder = require('./seeder.route');
routes.settingmaster = require('./sia-master/setting.route');
routes.lessonmaster = require('./sia-master/lesson.route');
routes.eduyearmaster = require('./sia-master/eduyear.route');
routes.classroommaster = require('./sia-master/classroom.route');
routes.teachermaster = require('./sia-master/teacher.route');
routes.studentmaster = require('./sia-master/student.route');
routes.student_class_activity = require('./sia-activity/student-class.route');
routes.lesson_class_activity = require('./sia-activity/lesson-class.route');

module.exports = routes;
