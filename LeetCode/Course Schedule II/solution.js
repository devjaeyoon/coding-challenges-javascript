/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const order = [];
  let head = 0;

  while (head < queue.length) {
    const course = queue[head++];
    order.push(course);

    for (const nextCourse of graph[course]) {
      inDegree[nextCourse]--;

      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return order.length === numCourses ? order : [];
};
