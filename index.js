const moment = require("moment");

const user = `user`;
const pass = `pass`;
const ip = `127.0.0.1`;
const rtsp = 554;
const channel = 2;

const utc = moment();
let local = utc.utcOffset(5);
// NVR Delay
local = local.subtract(180, "s");
const startISO = local.format().slice(0, -6) + ".000";
const startTime = startISO.replace(/([-:])/g, "");

const end = local.add(10, "s");
const endISO = end.format().slice(0, -6) + ".000";
const endTime = endISO.replace(/([-:])/g, "");

/**
 * HikVision Playback:
 * rtsp://nvrUser:nvrPass@127.0.0.1:554/Streaming/tracks/301?starttime=20200911T161911.000&amp;endtime=20200911T161921.000
 * where "3xx" represents camera number assigned in NVR/DVR
 * and "xx1" represents Main Stream HD ("xx2" stands for low quality Sub Stream)
 *
 * Live IP Cam:
 * rtsp://camUser:camPass@127.0.0.55:554/Streaming/Channels/101
 * Screenshot IP Cam:
 * http://camUser:camPass@127.0.0.55/ISAPI/Streaming/channels/101/picture
 */
const playback = `rtsp://${user}:${pass}@${ip}:${rtsp}/Streaming/tracks/${channel}01?starttime=${startTime}&amp;endtime=${endTime}`;
const live = `rtsp://${user}:${pass}@${ip}:${rtsp}/Streaming/Channels/101`;
const screenshot = `http://${user}:${pass}@${ip}/ISAPI/Streaming/channels/101/picture`;
console.log(playback);
console.log(live);
console.log(screenshot);
