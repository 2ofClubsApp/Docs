module.exports = {
  someSidebar: {
    "Getting Started": ['welcome', 'installation'],
    "Admin": ['toggle_user', 'toggle_club', 'toggle_tag', 'upload_tags', 'club_preview', 'get_non_approved_clubs', 'get_non_approved_users'],
    "Authentication": ['signup', 'login', 'change_password', 'request_reset_password', 'reset_password', 'logout', 'refresh'],
    "User" : ['get_user'],
    "Club" : ['create_club', 'update_club', 'get_club', 'get_club_managers', 'add_manager', 'remove_manager'],
    "Photos": ['upload_club_photo', 'get_club_photo'],
    "Tag": ['create_tag', 'get_tags', 'update_user_tags', 'update_club_tags'],
    "Events": ['create_event', 'update_event', 'delete_event', 'get_event', 'attend_event', 'unattend_event'],
    "Status": ['status']
  },
};
