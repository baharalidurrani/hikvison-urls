# hikvison-urls

HikVision HTTP ScreenShot and RTSP Live/Playback URL generator

## format

### HikVision Playback:

(rtsp://nvrUser:nvrPass@127.0.0.1:554/Streaming/tracks/301?starttime=20200911T161911.000&amp;endtime=20200911T161921.000)

where `3xx` represents camera number assigned in NVR/DVR
and `xx1` represents Main Stream HD
`xx2` stands for low quality Sub Stream

Live IP Cam:
(rtsp://camUser:camPass@127.0.0.55:554/Streaming/Channels/101)
Screenshot IP Cam:
(http://camUser:camPass@127.0.0.55/ISAPI/Streaming/channels/101/picture)

## `npm install`

to install the dependencies (i.e moment)

## `npm start`

to start the app with `node index.js`

## thanks
