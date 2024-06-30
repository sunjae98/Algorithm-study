function solution(wallpaper) {
  var answer = [];
  arr = Array.from(Array(wallpaper.length), () =>
    Array(wallpaper[0].length).fill(0)
  );
  return answer;
}

console.log(solution(['.#...', '..#..', '...#.']));
