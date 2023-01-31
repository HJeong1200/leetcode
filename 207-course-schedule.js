var canFinish = function (numCourses, prerequisites) {
  const attended = new Set();
  const prerequisitesOfCourse = Array(numCourses)
    .fill("")
    .map(() => []);
  const canAttendAfter = Array(numCourses)
    .fill("")
    .map(() => []);
  let queue = [];

  for (let el of prerequisites) {
    const [nextCourse, prerequisite] = el;

    prerequisitesOfCourse[nextCourse].push(prerequisite);
    canAttendAfter[prerequisite].push(nextCourse);
  }

  for (i = 0; i < numCourses; i++) {
    if (!prerequisitesOfCourse[i].length) {
      attended.add(i);
      queue = [...canAttendAfter[i], ...queue];
    }
  }

  if (attended.size === 0) return false;

  while (queue.length) {
    const course = queue.pop();

    if (prerequisitesOfCourse[course].every((el) => attended.has(el))) {
      attended.add(course);
      queue = [...canAttendAfter[course], ...queue];
    }
  }

  return attended.size === numCourses;
};
