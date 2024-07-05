import Icon from '@mdi/react';
import { mdiMapMarker,mdiPhone,mdiClockTimeFive } from '@mdi/js';

function ContactInfo() {
  return (
    <div className="flex flex-col gap-11">
      {infoItems.map((item) => (
        <div key={item.text} className="flex gap-5">
          <Icon path={item.icon} size={1.3}/>
          <div className="max-w-80 md:max-w-52">
            <h3 className="font-medium text-2xl">{item.text}</h3>
            {item.excerpt.map((line) => (
              <p key={line} className="text-base">{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactInfo

const infoItems = [
  {
    icon: mdiMapMarker,
    text: "Address",
    excerpt: ["236 5th SE Avenue, New York NY10000, United States"]
  },
  {
    icon: mdiPhone,
    text: "Phone",
    excerpt: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
  },
  {
    icon: mdiClockTimeFive,
    text: "Working time",
    excerpt: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"]
  }
]