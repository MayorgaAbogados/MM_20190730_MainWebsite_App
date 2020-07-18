export function createNewMeeting(contactForm: any, scheduleForm: any) {
  return new Promise((resolve, reject) => {
    /*
   name: this.isTest ? 'JORGE LUIS MAYORGA TEST' : '',
        company: this.isTest ? 'COMPAÑIA MAYORGA' : '',
        nit: this.isTest ? '10102071111' :  '',
        email: this.isTest ? 'wallamejorge@hotmail.com' :  '',
        phone: this.isTest ? '3005318387' : '',
        skype: this.isTest ? '@wallamejorge' :  '',
        city: this.isTest ? 'BOGOTA' :  '',
        authorized_data: this.isTest ? true : false,
        comments: this.isTest ? 'ESTE ES UN COIMENTARIO DE PRUEBA' : '',
        files: [],
        refCode: ''
    */

    const formData = new FormData();
    formData.append('name', contactForm.name || ' - ');
    formData.append('company_name', contactForm.company || ' - ');
    formData.append('company_nit', contactForm.nit || ' - ');
    formData.append('nid', contactForm.nit || ' - ');
    formData.append('email', contactForm.email );
    formData.append('phone', contactForm.phone || ' - ');
    formData.append('phone', contactForm.phone || ' - ');
    formData.append('skype', contactForm.skype || ' - ');
    formData.append('city', contactForm.city || ' - ') ;
    formData.append('authorized_data', contactForm.authorized_data);
    formData.append('type_of_meeting', contactForm.typeOfMeeting);
    formData.append('comments', contactForm.comments || ' - ');
    formData.append('refCode', contactForm.refCode);

    formData.append('date', scheduleForm.date);
    formData.append('timestamp_from', '' + Math.round(scheduleForm.timestamp_from.getTime()/1000));
    formData.append('timestamp_to', '' + Math.round(scheduleForm.timestamp_to.getTime()/1000));
    formData.append('startTime', scheduleForm.startTime);
    formData.append('endTime', scheduleForm.endTime);

    const dev = 'http://localhost:8000/api/meetings-gcalendar';
    const prod = 'http://server.mayorga.com.co/api/meetings-gcalendar';
    
    fetch(prod, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.warn('MEETING CREADO')
        console.warn(data)
        resolve(data);
      })
      .catch(error => {
        console.error(error);
        debugger;
      });
  });
}
