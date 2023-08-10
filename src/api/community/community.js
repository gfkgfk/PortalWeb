export default{
    urls: {
        'getAllAnnouncement': {
            'type': 'POST',
            'url': 'api/v1/community/getAllAnnouncement',
        },
        'getAnnouncementById':{
            'type': 'POST',
            'url': 'api/v1/community/getAnnouncementById',
        },
        'saveAnnouncement':{
            'type': 'POST',
            'url': 'api/v1/community/saveAnnouncement',
        },
        'deleteAnnouncement':{
            'type': 'POST',
            'url': 'api/v1/community/deleteAnnouncement',
        }
    }
}