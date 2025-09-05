import PlayGreen from "@/icons/PlayGreen";

interface Playlist {
    id?: string;
    title?: string;
    cover?: string;
  }

const FavoriteCard = ({ playlist }: { playlist: Playlist }) => {
    return (
        <article
        className="text-white flex items-center max-w-[250px]"
      >
        <div className="flex items-center gap-2 group justify-center bg-whiteOpacityInactive hover:bg-whiteOpacityActive transition-all duration-150 ease-in-out mt-6 w-full overflow-hidden pr-3 cursor-pointer rounded-sm relative">
          {playlist.cover && (
            <figure className="size-14 flex-shrink-0">
              <img
                src={playlist.cover}
                alt={playlist.title}
                className="w-full h-full object-cover"
              />
              <PlayGreen />
            </figure>
          )}
          <h3 className="text-sm font-medium truncate whitespace-nowrap overflow-hidden">
            {playlist.title}
          </h3>
        </div>
      </article>
      
    );
  }
  
export default FavoriteCard
