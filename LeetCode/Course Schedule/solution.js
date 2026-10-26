/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    indegree[course]++;
  }

  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let completed = 0;
  let head = 0;

  while (head < queue.length) {
    const course = queue[head++];
    completed++;

    for (const nextCourse of graph[course]) {
      indegree[nextCourse]--;

      if (indegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return completed === numCourses;
};
