export default function uploadFiles(FILE: any, modelId: string) {
  return new Promise((resolve, reject) => {
    const file = FILE;
    const formData = new FormData();

    formData.append('file', file);
    formData.append('model_id', modelId);
    formData.append('model_name', 'MEETING');
    formData.append('path', 'FILES/MEETINGS');

    const dev = 'http://localhost:8000/api/files/support/upload';
    const prod = 'http://server.mayorga.com.co/api/files/support/upload';

    fetch(prod, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(' FILES UPLOAD RESPONSE ');
        console.log(data);
        resolve(data)
      })
      .catch(error => {
        console.error(error);
        debugger;
      });
  });
}
