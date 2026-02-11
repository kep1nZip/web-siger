import MemberCard from "../components/MemberCard";
import members from "../data/members";

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 pt-28 pb-16">
      <h1 className="text-4xl font-bold mb-12 text-white">
        Member SIGERS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {members.map((m, index) => (
          <div key={index} className="flex justify-center">
            <MemberCard member={m} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
