const { getBy, isOver, isBelow, isInRange } = require('./filters');

const videos = [
  {
    name: 'video 1',
    duration: 45
  },
  {
    name: 'video 2',
    duration: 1
  },
  {
    name: 'video 3',
    duration: 55
  }
];

const viewDuration = (predicate) => (video) => predicate(video.duration);


const isOverDuration = predicate => min => predicate(isOver(min))
const isBelowDuration = predicate => min => predicate(isBelow(min))
const isInDuration = predicate => (min, max) => predicate(isInRange(min, max))

console.log('\nr1: ', videos.filter(isOverDuration(viewDuration)(40)));
console.log('\nr2: ', videos.filter(isBelowDuration(viewDuration)(40)));
console.log('\nr3: ', videos.filter(isInDuration(viewDuration)(40, 50)));


const getVideosByDuration = getBy(viewDuration);

const getVideosOver40min = getVideosByDuration(isOverDuration, [40]);
const getVideosBelow2min = getVideosByDuration(isBelowDuration, [2]);
const getVideosBetween40And50min = getVideosByDuration(isInDuration, [40, 50]);

console.log('\nr4: ', getVideosOver40min(videos));
console.log('\nr5: ', getVideosBelow2min(videos));
console.log('\nr6: ', getVideosBetween40And50min(videos));