// type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`A product with ${uid} has a title as ${user}.`);
}

type Platform = "Windows" | "Linux" | "Mac Os" | "Android";

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("Android");

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "Dalton");
logInfo("123", "Dalton");
