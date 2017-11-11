# Download Web Files to Dropbox with Google Apps Script

Use Google Apps Script with the Dropbox API to download any file from the Internet and upload it directly to the Internet without saving it to your computer. You need to specify the URL of the web file and path in your Dropbox folder where that file should be saved. If a file in the given path already exists, the new file will be renamed.

## Setup

Go to the next Dropbox screen and create an access token. By generating an access token, you will be able to make Dropbox API calls for your own account without going through the Dropbox OAuth2 authorization flow. To obtain access tokens for other users, use the standard OAuth flow.

The /save_url endpoint saves the file at the specified URL in your Dropbox. It returns a Job ID since the upload process is asynchronous. You can make calls to /save_url/check_job_status to check the upload status when the return code is “complete”, the file has been successfully uploaded to your Dropbox folder.

The SaveUrl functionality in Dropbox doesn’t have a file size limit, but the download operations on the Dropbox servers do time out after 5 minutes. So, if it takes longer than 5 minutes to transfer the file from the URL to the Dropbox servers, the file won’t be saved.

If you call /save_url/check_job_status again to check later (e.g., after at most 5 minutes) it should return either information about the successfully saved file, or an error message indicating the issue.

# Author
Written by [Sarmad Gardezi](http://sarmadgardezi.com) for [Developers](http://thedevelopers.pk). Follow me on [@twitter](https://twitter.com/@SarmadGardezi).
