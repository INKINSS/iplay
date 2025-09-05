import CardPodcast from "./CardPodcast"
import podcasts from "../../../public/podcast/data/dataPodcast.json"

const ViewPodcast = () => {
  return (
    <section>
        <h1 className="text-2xl font-bold text-white mt-5">Escucha tus podcasts favoritos</h1>
        <div className="flex gap-4 flex-wrap py-10">
            {podcasts.map((podcast) => <CardPodcast key={podcast.title} {...podcast} />)}
        </div>
    </section>
  )
}

export default ViewPodcast