import "jalali-date";
//import { JDate } from "jalali-date";
const JDate = require("jalali-date");

export default function dayAfter(day) {
    if (!day && typeof day !== "number") {
        return;
    }

    const jdate = new JDate();
    const today = jdate.getDate();
    const daysInMonth = JDate.daysInMonth(jdate.date[0], jdate.date[1]);

    if (today + day <= daysInMonth) {
        return today + day;
    } else {
        return today + day - daysInMonth;
    }
}
