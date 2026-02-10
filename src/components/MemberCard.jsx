function MemberCard({ member }) {
  return (
    <div className="w-full max-w-sm bg-zinc-900 text-white rounded-2xl p-5 shadow-lg border border-zinc-700 hover:scale-105 transition duration-300">
      
      <img
        src={member.foto}
        alt={member.nama}
        className="w-full rounded-xl mb-4"
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

    </div>
  );
}

export default MemberCard;
