var goBtn = $('.go-btn');
var resultMsg = $('.result-msg');
var signResult = $('.sign-result');

var signs = {
  aries: 'gulliver. you’re adventurous. you want to see the world — but you’re a bit of a clutz sometimes.',
  taurus: 'sable. you’re shy at first, but as soon as you get to know someone, you’re an absolute delight. and you’re a hard worker, too.',
  gemini: 'timmy and tommy. although you look adorable on the outside, you’re secretly super smart. you’re good with money, good at what you do.',
  cancer: 'mabel. You’re family oriented. you spend as much time with your loved ones as you can. and you have an eye for fashion.',
  leo: 'tom nook. you are extremely innovative and helpful — but you never do anything unless you’re going to get something back in return.️',
  virgo: 'orville. you’re sweet, you’re good at your job, and you always want everyone around you to be in a good mood.',
  libra: 'celeste. you could spend all day looking at the stars. you’re in awe of the universe and find it breathtakingly beautiful.',
  scorpio: 'flick or cj. you are super artistic. and you have a best friend who you can’t shut up about because you’re so close.',
  sagittarius: 'redd. you’re a little sneaky. you know exactly how to get your way, even if it means telling little white lies here and there.',
  capricorn: 'blathers. you’re extremely intelligent and like to ramble on and on about everything you know.',
  aquarius: 'k.k. slider. you’re an artist. you could spend hours upon hours creating. it’s pretty much all you do.',
  pisces: 'isabelle. you like to hear yourself talk. you’re always rambling about a tv show you watched or a phone call with your parents. and everybody loves that about you.',
}

goBtn.on('click', giveUserCharacter);

function giveUserCharacter(event) {
  event.preventDefault();
  var nameInput = $('.name-input').val();
  var signInput = $('.sign-input').val().toLowerCase();
  
  resultMsg.text(`${nameInput}, you are the embodiment of:`);
  signResult.text(signs[signInput]);
}