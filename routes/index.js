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
routes.lesson_class_student_activity = require('./sia-activity/lesson-class-student.route');
routes.usermaster = require('./master/user.route');
routes.rolemaster = require('./master/role.route');
routes.teacher_class_lesson_activity = require('./sia-activity/teacher-class-lesson.route');
routes.student_class_lesson_activity = require('./sia-activity/student-class-lesson.route');
routes.download = require('./download.route');
routes.siadashboard = require('./sia-dashboard.route');
routes.account = require('./account.route');

module.exports = routes;
