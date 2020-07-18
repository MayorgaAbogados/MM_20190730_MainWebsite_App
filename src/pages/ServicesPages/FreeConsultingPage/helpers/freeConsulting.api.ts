import { IFreeConsultingForm } from '../models/FreeConsultingForm.model';

const api = 'http://server.mayorga.com.co/api/webminars/subscribe/add';

export function postFreeConsulting(form: IFreeConsultingForm) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    const autorizaData = form.authorized_data ? 'si' : 'no';

    formData.append('names', form.userName);
    formData.append('position', form.position);
    formData.append('company', form.companyName);
    formData.append('nit', form.companyNIT);
    formData.append('city', form.city);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('autoriza_datos', autorizaData);
    formData.append('consulta', form.comments);
    formData.append('source', 'WEBSITE');

    fetch(api, {
      body: formData,
      method: 'post'
    })
      .then(response => {
        return response;
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
