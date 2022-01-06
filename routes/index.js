const routes = {};
routes.auth = require('./auth.route');
routes.post = require('./post.route');
routes.slide = require('./slide.route');
routes.albumGallery = require('./album-gallery.route');
routes.general = require('./general.route');
routes.menu = require('./menu.route');
routes.public = require('./public.route');
routes.seeder = require('./seeder.route');
routes.lessonmaster = require('./lesson-master.route');
routes.eduyearmaster = require('./eduyear-master.route');
routes.classroommaster = require('./classroom-master.route');
routes.teachermaster = require('./teacher-master.route');
routes.studentmaster = require('./student-master.route');

module.exports = routes;
