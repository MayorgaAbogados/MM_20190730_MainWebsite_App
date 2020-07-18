import { IScheduleForm } from '../models/ScheduleMeetingForm.model';

const url_prod = 'http://server.mayorga.com.co/api/meetings/google/calendar/busy';
const url_dev = 'http://localhost:8000/api/meetings/google/calendar/busy';

const moment = require('moment');
const md5 = require('md5');

export function getGoogleCalendarEvents() {
  return new Promise((resolve, reject) => {


    fetch(url_prod)
      .then(res => res.json())
      .then((gevents: any[]) => {

        const scheduleEvents = [];
        for(let k = 0; k < gevents.length ; k++) {

            const event = gevents[k];

            const obj = {
                id: '',
                disabled: true,
                date: new Date(),
               
                startTime:  ((event.start.split('T')[1]).split('.')[0]),
                endTime: ((event.end.split('T')[1]).split('.')[0]),

                html: 'RESERVADO <br> <span> - </span> '
            }

            const date = moment.utc(event.start);
            const startTime =  moment.utc(event.start);
            const endTime =   moment.utc(event.end);

            obj.date = date.toDate();
            obj.startTime = startTime.toDate().toTimeString().split(' ')[0];
            obj.endTime = endTime.toDate().toTimeString().split(' ')[0];
            obj.id = md5(obj.date.toISOString() + Math.random());


            const startAsMinutes = (startTime.minutes() + startTime.hours() * 60);
            const endAsMinutes= (startTime.minutes() + startTime.hours() * 60);

            const isStartBefore8am = startAsMinutes < (8*60);
            const isEndBefore8am = endAsMinutes < (8*60);
            const isStartAfter6pm = startAsMinutes > (12*60 + 6*60);
            const isEndAfter6pm = endAsMinutes < (12*60 + 6*60);


            //if(startAsMinutes > 5pm)

            scheduleEvents.push(obj);
            
        }

            
        resolve(scheduleEvents);

      })
      .catch(error => {
          reject(error)
      });

  });
}
