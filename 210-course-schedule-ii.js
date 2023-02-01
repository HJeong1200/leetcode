var findOrder = function (numCourses, prerequisites) {
  const attended = [];
  const attendedSet = new Set();
  const canAttendAfter = Array(numCourses)
    .fill("")
    .map(() => []);
  const haveToAttendBefore = Array(numCourses)
    .fill("")
    .map(() => []);
  let queue = [];

  for (let el of prerequisites) {
    const [next, prerequisite] = el;

    canAttendAfter[prerequisite].push(next);
    haveToAttendBefore[next].push(prerequisite);
  }

  for (let i = 0; i < haveToAttendBefore.length; i++) {
    if (!haveToAttendBefore[i].length) {
      attended.push(i);
      attendedSet.add(i);
      queue = [...canAttendAfter[i], ...queue];
    }
  }

  if (!attended.length) return [];

  while (queue.length) {
    const course = queue.pop();
    if (attendedSet.has(course)) continue;

    if (haveToAttendBefore[course].every((el) => attendedSet.has(el))) {
      queue = [...canAttendAfter[course], ...queue];
      attended.push(course);
      attendedSet.add(course);
    }
  }

  return attendedSet.size === numCourses ? attended : [];
};
