import ApiCalendar from 'react-google-calendar-api'

const config = {
  clientId:
    '492500856119-6ak0clbr7deks51cku0c8l15nddb0d5f.apps.googleusercontent.com',
  apiKey: 'AIzaSyCMQySXjvsZMqRg2gPUEoFe95btihHRU1U',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

export const apiCalendar = new ApiCalendar(config);