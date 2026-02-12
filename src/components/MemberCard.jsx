function MemberCard({ member }) {
  return (
    <div className="
    w-full max-w-sm
    bg-zinc-900 text-white
    rounded-2xl p-5
    border border-zinc-700
    shadow-lg
    transition-all duration-300

    hover:scale-105
    hover:border-red-500
    hover:shadow-[0_0_25px_rgba(255,80,0,0.6)]
    hover:ring-1 hover:ring-orange-400/60
    ">

      <img
        src={member.foto}
        alt={member.nama}
        className="w-full rounded-xl mb-4 object-cover"
      />

      <h2 className="text-2xl font-semibold mb-2">{member.nama}</h2>

      <p className="text-sm text-zinc-300">Hobi: {member.hobi}</p>
      <p className="text-sm text-zinc-300">Ultah: {member.ulangTahun}</p>
      <p className="text-sm text-zinc-300">Kelebihan: {member.kelebihan}</p>
      <p className="text-sm text-zinc-300 mb-3">Kekurangan: {member.kekurangan}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        {member.badge?.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full shadow"
          >
            {item}
          </span>
        ))}
      </div>

      {member.instagram && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-pink-40 hover:text-pink-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm4.25 3.5a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm4.88-2.38a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
          </svg>

          <span className="text-sm">--- instagram</span>
        </a>
      )} 

    </div>
  );
}

export default MemberCard;
