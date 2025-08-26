import HeaderContent from "./HeaderContent";
import PersonalContent from "./PersonalContent";
import PublicSong from "./PublicSong";

const IndexContent = () => {
  return (
    <section className="space-y-6">
      <HeaderContent />
      <PersonalContent />
      <PublicSong />
    </section>
  );
};

export default IndexContent;
