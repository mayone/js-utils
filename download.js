const { createWriteStream } = require("fs");
const { Readable } = require("stream");

if (typeof fetch === "undefined")
  throw new Error("Fetch API is not supported.");

const download = async () => {
  const response = await // #NOTE: Chrome
  // 1. Inspect -> Network -> Find the .mp4 -> Copy as fetch format (Node.js) -> Paste it here
  // 2. Remove if-range and range
  // #Note: code start
  fetch("replace this");
  // #Note: code end

  if (!response.ok) throw new Error("Response is not ok.");
  console.log(response);

  const videoFileName = response.url.split("/").pop() || "video.mp4";
  const writeStream = createWriteStream(videoFileName);
  const readable = Readable.fromWeb(response.body);

  readable.pipe(writeStream);

  await new Promise((resolve, reject) => {
    readable.on("end", resolve);
    readable.on("error", reject);
  });
};

download();
