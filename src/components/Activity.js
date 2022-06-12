export default function Activity() {
  return (
    <div className="pt-[1.7vw] px-[1.7vw]">
      <div className="font-bold text-lg mb-[1.7vw]"><p>Aktivitas</p></div>
      {
        ActivityData.map((item, index) => {
          return (
            <ActivityItem
              key={index}
              title={item.title}
              time={item.time}
            />
          )
        })
      }
    </div>
  )
}

function ActivityItem({title, time}) {
  return (
    <div className="my-6">
      <p className="mb-2">{title}</p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  )
}

const ActivityData = [
  {
    title: "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
    time: "Hari ini, 06:00"
  },
  {
    title: "Bintang baru saja menghapus sublokasi KCP Tebet 4 dari Induk Kantor Cabang Tebet",
    time: "Kemaren, 17:32"
  },
  {
    title: "Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi",
    time: "Kemaren, 17:32"
  },
]