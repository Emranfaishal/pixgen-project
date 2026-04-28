import PhotoCard from "./PhotoCard";

const ToGenerations = async () => {
    const res = await fetch('https://pixgen-project-wine.vercel.app/data.json');
    const photos = await res.json();
    const toPhotos = photos.slice(0, 8);
    return (
        <div>
            <h2 className="text-3xl font-bold text-red-500 mt-5">Top Generations</h2>

            <div className="grid grid-cols-4 gap-5">
                {
                    toPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default ToGenerations;