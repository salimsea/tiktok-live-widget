const { WebcastPushConnection } = require("tiktok-live-connector");
const { exec } = require("child_process");
const colors = require("colors/safe");

// let tiktokUsername = "belajar.slicing.design";
// let tiktokUsername = "aa.rizq";
let tiktokUsername = "mr.win74";
// let tiktokUsername = "lylia.san";
// let tiktokUsername = "motori250";
let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);
tiktokLiveConnection
  .connect()
  .then((state) => {
    console.info(
      `✅  Connected to roomId ${colors.bold.white.bgRed(state.roomId)}`
    );
  })
  .catch((err) => {
    console.error("Failed to connect", err);
  });

tiktokLiveConnection.on("chat", (data) => {
  let nickname = colors.bold.blue.bgWhite(
    `${data.nickname} / ${data.uniqueId}`
  );
  console.log(
    `🗣️  ${nickname} \n writes: ${colors.bold.white.brightWhite(data.comment)}`
  );
});

tiktokLiveConnection.on("gift", (data) => {
  let nickname = colors.bold.black.bgYellow(
    `${data.nickname} / ${data.uniqueId}`
  );
  let datagift = colors.bold.white.bgRed(
    `${data.giftName} x${data.repeatCount} (${data.diamondCount} coin)`
  );
  if (data.giftType === 1 && !data.repeatEnd) {
    console.log(`🎁 ${nickname} \n is sending gift ${datagift}`);
    let filePath =
      "/Users/salimsea/Documents/Salim/Proyek/Rumah/learn-tiktok/music/gift/";
    if (data.diamondCount > 4 && data.diamondCount <= 10) {
      filePath += "yeehaw.mp3";
    } else if (data.diamondCount >= 11 && data.diamondCount <= 30) {
      filePath += "kids-yey.mp3";
    } else if (data.diamondCount >= 31 && data.diamondCount <= 100) {
      filePath += "air-horn.mp3";
    } else if (data.diamondCount >= 101 && data.diamondCount <= 300) {
      filePath += "mario-sound-1.mp3";
    } else if (data.diamondCount >= 301 && data.diamondCount <= 400) {
      filePath += "mario-sound-2.mp3";
    } else if (data.diamondCount >= 401 && data.diamondCount <= 9999999) {
      filePath += "spongebob-sound.mp3";
    } else {
      filePath += "mario-coin.mp3";
    }
    const command = `afplay "${filePath}"`;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error("Error executing AppleScript:", err);
        return;
      }
      // console.log("Music playback initiated.");
    });
  } else {
    console.log(`🎁 ${nickname} \n has sent gift ${datagift}`);
  }
});

tiktokLiveConnection.on("like", (data) => {
  let nickname = colors.bold.red.bgWhite(`${data.nickname} / ${data.uniqueId}`);
  console.log(
    `❤️  ${nickname} \n sent ${data.likeCount} likes, total likes: ${data.totalLikeCount}`
  );

  let filePath =
    "/Users/salimsea/Documents/Salim/Proyek/Rumah/learn-tiktok/music/like/";
  if (data.totalLikeCount > 6000 && data.totalLikeCount <= 6010) {
    filePath += "like-10rb.mp3";
  } else if (data.totalLikeCount >= 8000 && data.totalLikeCount <= 8010) {
    filePath += "like-10rb.mp3";
  } else if (data.totalLikeCount >= 9000 && data.totalLikeCount <= 9010) {
    filePath += "like-10rb.mp3";
  } else if (data.totalLikeCount > 16000 && data.totalLikeCount <= 16010) {
    filePath += "like-20rb.mp3";
  } else if (data.totalLikeCount >= 18000 && data.totalLikeCount <= 18010) {
    filePath += "like-20rb.mp3";
  } else if (data.totalLikeCount >= 19000 && data.totalLikeCount <= 19010) {
    filePath += "like-20rb.mp3";
  } else if (data.totalLikeCount > 26000 && data.totalLikeCount <= 26010) {
    filePath += "like-30rb.mp3";
  } else if (data.totalLikeCount >= 28000 && data.totalLikeCount <= 28010) {
    filePath += "like-30rb.mp3";
  } else if (data.totalLikeCount >= 29000 && data.totalLikeCount <= 29010) {
    filePath += "like-30rb.mp3";
  } else if (data.totalLikeCount > 36000 && data.totalLikeCount <= 36010) {
    filePath += "like-40rb.mp3";
  } else if (data.totalLikeCount >= 38000 && data.totalLikeCount <= 38010) {
    filePath += "like-40rb.mp3";
  } else if (data.totalLikeCount >= 39000 && data.totalLikeCount <= 39010) {
    filePath += "like-40rb.mp3";
  } else if (data.totalLikeCount > 46000 && data.totalLikeCount <= 46010) {
    filePath += "like-50rb.mp3";
  } else if (data.totalLikeCount >= 48000 && data.totalLikeCount <= 48010) {
    filePath += "like-50rb.mp3";
  } else if (data.totalLikeCount >= 49000 && data.totalLikeCount <= 49010) {
    filePath += "like-50rb.mp3";
  } else {
    filePath = null;
  }

  if (filePath) {
    const command = `afplay "${filePath}"`;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error("Error executing AppleScript:", err);
        return;
      }
      // console.log("Music playback initiated.");
    });
  }
});

tiktokLiveConnection.on("share", (data) => {
  let nickname = colors.bold.magenta.bgWhite(
    `${data.nickname} / ${data.uniqueId}`
  );
  console.log(`🚀  ${nickname} \n shared the stream!`);
});

tiktokLiveConnection.on("follow", (data) => {
  let nickname = colors.bold.green.bgWhite(
    `${data.nickname} / ${data.uniqueId}`
  );
  console.log(`👴 ${nickname} \n following you!`);
});
