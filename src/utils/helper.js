import moment from "moment";

export function formatDate(date, format) {
  
  if (format) {
    const formattedDate = moment(date).format(format);
    return formattedDate;
  } else {
    console.log('date', date);
    //let datenew = '25/07/2024';
    const formattedDate = moment(date).format("MMM Do YYYY");
    console.log('formattedDate', formattedDate);
    return formattedDate;
  }
}
