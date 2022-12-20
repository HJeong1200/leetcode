var canVisitAllRooms = function (rooms) {
  const visited = new Set([0]);

  for (let room of visited) {
    for (let key of rooms[room]) {
      visited.add(key);
    }
  }

  return visited.size === rooms.length ? true : false;
};
