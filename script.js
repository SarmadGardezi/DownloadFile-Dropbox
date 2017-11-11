// Written by Sarmad Gardezi

function saveWebFilesToDropbox(fileUrl) {
  
  var accessToken = 'Dropbox-xxxx-1234';  
  var headers = {
    "Content-Type": "application/json",
    'Authorization': 'Bearer ' + accessToken
  };
  
  fileUrl = fileUrl || "https://img.labnol.org/files/Most-Useful-Websites.pdf";
  var parameters = {
    "url": fileUrl,
    "path": "/PDF/book.pdf"
  };
  
  var options = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(parameters)
  };
  
  var apiUrl = "https://api.dropboxapi.com/2/files/save_url";
  var response = JSON.parse(UrlFetchApp.fetch(apiUrl, options).getContentText());
  
  var checkUrl = apiUrl + "/check_job_status";  
  var checkOptions = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify({
      "async_job_id": response.async_job_id
    })
  };
  
  do {
    Utilities.sleep(1000);
    response = JSON.parse(UrlFetchApp.fetch(checkUrl, checkOptions).getContentText());
  } while (response[".tag"] != "complete");
  
  Logger.log("File uploaded successfully to Dropbox");
  
}





