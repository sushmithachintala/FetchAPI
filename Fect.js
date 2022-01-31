function fetchData(){

    apik = "ASWZ-3U19-5N0P-YKZR-10BN-R2IO-90NH-SNWY"

    fetch('https://api.stage.fetchdocs.io'+downloadFile+apik)
    .then(res => res.json())
    
    .then(blob => console.log(blob))
      .then(blob => {
       /* var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "filename.docs";
        document.body.appendChild(a); 
        a.click();    
        a.remove();*/
        download(blob);
      })

      .catch(error => {
        console.error(error)
      })

}
fetchData();

/*let download = require('./download.min');
function downloadFile() {
  let url = 'https://api.stage.fetchdocs.io/';
  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': "ASWZ-3U19-5N0P-YKZR-10BN-R2IO-90NH-SNWY"
    }
  })
  .then(function(resp) {
    return resp.blob();
  })
  .then(function(blob) {
    download(blob);
  });
} */